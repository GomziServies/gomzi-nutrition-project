import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import NutritionFooter from "../../components/partials/Footer/nutritionfooter";
import ChatBotGomziComponent from "../../components/whey-landing/chat-bot-gomzi";
import "../../assets/css/nutrition.css";
import "../../assets/css/complaints.css";
import { axiosInstance, publicAxiosInstance } from "../../assets/js/config/api";
import { toast } from "react-toastify";
import LoginModal from "../../assets/js/popup/login";

function ComplaintForm() {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userData, setUserData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(
    () => !!localStorage.getItem("fg_group_user_authorization"),
  );
  const [uploadedFilesList, setUploadedFilesList] = useState([]);

  const [formInputs, setFormInputs] = useState({
    fullName: "",
    mobile: "",
    email: "",
    complaintText: "",
    complaint_media: "",
  });

  const fileInputRef = React.useRef(null);
  const pendingSubmitRef = React.useRef(false);
  const formInputsRef = React.useRef(formInputs);
  const uploadedFilesListRef = React.useRef(uploadedFilesList);

  useEffect(() => {
    formInputsRef.current = formInputs;
  }, [formInputs]);

  useEffect(() => {
    uploadedFilesListRef.current = uploadedFilesList;
  }, [uploadedFilesList]);

  const auth = localStorage.getItem("fg_group_user_authorization");

  useEffect(() => {
    if (auth) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth]);

  useEffect(() => {
    if (isLogin) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  useEffect(() => {
    setFormInputs((prev) => ({
      ...prev,
      complaint_media: uploadedFilesList.map((f) => f.url).join(","),
    }));
  }, [uploadedFilesList]);

  // Cleanup object URLs on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      uploadedFilesListRef.current.forEach((item) => {
        if (item.previewUrl && item.previewUrl.startsWith("blob:")) {
          try {
            URL.revokeObjectURL(item.previewUrl);
          } catch (e) {}
        }
      });
    };
  }, []);

  const formatMobile = (mob) => {
    if (!mob) return "";
    let cleanVal = String(mob).replace(/\D/g, "");
    while (cleanVal.startsWith("0")) {
      cleanVal = cleanVal.substring(1);
    }
    return cleanVal.substring(0, 10);
  };

  const getUserId = (fallbackToken) => {
    if (userData) return userData;

    const localUserInfo = localStorage.getItem("user_info");
    if (localUserInfo) {
      try {
        const user = JSON.parse(localUserInfo);
        const id = user?._id || user?.id || user?.user?._id;
        if (id) return id;
      } catch (e) {}
    }

    const token =
      fallbackToken || localStorage.getItem("fg_group_user_authorization");
    if (token) {
      try {
        const base64Url = token.split(".")[1];
        if (base64Url) {
          const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join(""),
          );
          const decoded = JSON.parse(jsonPayload);
          const extractedId =
            decoded._id || decoded.id || decoded.userId || decoded.user_id;
          if (extractedId) return extractedId;
        }
      } catch (e) {}
    }

    return "";
  };

  const isDefaultProfileName = (first, last) => {
    const f = (first || "").trim().toLowerCase();
    const l = (last || "").trim().toLowerCase();
    const full = `${f} ${l}`.trim();
    return !full || full === "fg user" || f === "fg" || l === "user";
  };

  const getValidFullName = (user) => {
    if (!user) return "";
    const first = (user.first_name || "").trim();
    const last = (user.last_name || "").trim();
    const validFirst = first.toLowerCase() === "fg" ? "" : first;
    const validLast = last.toLowerCase() === "user" ? "" : last;
    return `${validFirst} ${validLast}`.trim();
  };

  const syncUserProfile = async (fullName, email, mobile) => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const data = response?.data?.data;
      const user = data?.user || data;

      const first = (user?.first_name || "").trim();
      const last = (user?.last_name || "").trim();
      const currentEmail = (user?.email || "").trim();

      const isDefault = isDefaultProfileName(first, last);
      const isEmailEmpty = !currentEmail;

      const trimmedName = (fullName || "").trim();
      const trimmedEmail = (email || "").trim();
      const trimmedMobile = (mobile || "").trim();

      const nameParts = trimmedName.split(/\s+/).filter(Boolean);
      const newFirstName = nameParts[0] || "";
      const newLastName =
        nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

      const updatePayload = {};
      let needsUpdate = false;

      if (isDefault && newFirstName) {
        updatePayload.first_name = newFirstName;
        updatePayload.last_name = newLastName;
        needsUpdate = true;
      }

      if (isEmailEmpty && trimmedEmail) {
        updatePayload.email = trimmedEmail;
        needsUpdate = true;
      }

      if (needsUpdate) {
        if (trimmedMobile || user?.mobile) {
          updatePayload.mobile = trimmedMobile || user?.mobile;
        }
        if (user?.uid) {
          updatePayload.user_id = user.uid;
        }

        await axiosInstance.post("/account/update-profile", updatePayload);

        const refetched = await axiosInstance.get("/account/profile");
        if (refetched?.data?.data) {
          const u = refetched.data.data.user || refetched.data.data;
          if (u) {
            if ((u.first_name || "").trim().toLowerCase() === "fg")
              u.first_name = "";
            if ((u.last_name || "").trim().toLowerCase() === "user")
              u.last_name = "";
          }
          localStorage.setItem(
            "user_info",
            JSON.stringify(refetched.data.data),
          );
          window.dispatchEvent(new Event("user-info-updated"));
        }
      }
    } catch (err) {
      console.error("Error updating profile from complaint form:", err);
    }
  };

  const getUserData = async () => {
    let resolvedId = getUserId();
    if (resolvedId) {
      setUserData(resolvedId);
    }

    const localUserInfo = localStorage.getItem("user_info");
    if (localUserInfo) {
      try {
        const raw = JSON.parse(localUserInfo);
        const user = raw?.user || raw;
        if (user) {
          if (!resolvedId && (user._id || user.id)) {
            resolvedId = user._id || user.id;
          }
          const validName = getValidFullName(user);
          setFormInputs((prev) => ({
            ...prev,
            fullName: prev.fullName || validName,
            mobile: prev.mobile || formatMobile(user.mobile),
            email: prev.email || user.email || "",
          }));
        }
      } catch (e) {}
    }

    try {
      const response = await axiosInstance.get("/account/profile");
      const data = response?.data?.data;
      const user = data?.user || data;

      if (user && (user._id || user.id)) {
        const profileId = user._id || user.id;
        setUserData(profileId);
        resolvedId = profileId;
        const validName = getValidFullName(user);
        setFormInputs((prev) => ({
          ...prev,
          fullName: prev.fullName || validName,
          mobile: prev.mobile || formatMobile(user.mobile),
          email: prev.email || user.email || "",
        }));
        return profileId;
      }
    } catch (error) {
      console.error("User not logged in or error fetching profile:", error);
    }

    return resolvedId || getUserId();
  };

  const closeModal = () => {
    setShowModal(false);
    pendingSubmitRef.current = false;
    if (localStorage.getItem("fg_group_user_authorization")) {
      setIsLogin(true);
      getUserData();
    }
  };

  const handleLoginSuccess = async (authToken) => {
    setIsLogin(true);
    setShowModal(false);
    const activeUserId = await getUserData();

    const currentInputs = formInputsRef.current;
    await syncUserProfile(
      currentInputs.fullName,
      currentInputs.email,
      currentInputs.mobile,
    );

    if (pendingSubmitRef.current) {
      pendingSubmitRef.current = false;
      await submitComplaint(activeUserId || getUserId(authToken));
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "mobile") {
      value = value.replace(/\D/g, ""); // Allow only digits
      value = value.replace(/^0+/, ""); // Remove leading zeros
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
    }

    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Helper to convert WEBP image to JPG
  const convertWebpToJpg = async (file) => {
    if (
      file.type === "image/webp" ||
      file.name.toLowerCase().endsWith(".webp")
    ) {
      try {
        const canvas = document.createElement("canvas");
        const img = new Image();
        img.src = URL.createObjectURL(file);
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const jpgBlob = await new Promise((resolve) =>
          canvas.toBlob(resolve, "image/jpeg", 0.8),
        );

        const jpgName = file.name.replace(/\.webp$/i, ".jpg");
        return new File([jpgBlob], jpgName, { type: "image/jpeg" });
      } catch (conversionError) {
        console.error("Failed to convert WEBP to JPG", conversionError);
        return file;
      }
    }
    return file;
  };

  // Upload single file to /file-upload endpoint (using publicAxiosInstance so it works for unauthenticated users as well)
  const uploadSingleFile = async (file) => {
    const processedFile = await convertWebpToJpg(file);
    const formDataForUpload = new FormData();
    formDataForUpload.append("files", processedFile);

    const response = await publicAxiosInstance.post(
      "/file-upload",
      formDataForUpload,
    );
    const photoUrl =
      response?.data?.data?.fileLocations?.[0] ||
      response?.data?.data?.fileURLs?.[0];
    if (!photoUrl) {
      throw new Error(`Upload failed for ${file.name}`);
    }
    return photoUrl.startsWith("http")
      ? photoUrl
      : "https://files.fggroup.in/" + photoUrl;
  };

  // Validate incoming files taking into account already uploaded files
  const validateFiles = (fileList) => {
    const newFiles = Array.from(fileList || []);
    if (newFiles.length === 0) return null;

    const existingCount = uploadedFilesList.length;
    const existingImages = uploadedFilesList.filter(
      (f) => f.type === "image",
    ).length;
    const existingPdfs = uploadedFilesList.filter(
      (f) => f.type === "pdf",
    ).length;
    const existingSize = uploadedFilesList.reduce((acc, f) => acc + f.size, 0);

    if (existingCount + newFiles.length > 6) {
      toast.error(
        `Maximum 6 files can be uploaded. You already have ${existingCount} file(s) uploaded.`,
      );
      return null;
    }

    let newImageCount = 0;
    let newPdfCount = 0;
    let newSize = 0;

    for (const file of newFiles) {
      newSize += file.size;

      if (
        file.type === "image/heic" ||
        file.name.toLowerCase().endsWith(".heic")
      ) {
        toast.error(
          `HEIC format is not supported (${file.name}). Please upload JPG or PNG.`,
        );
        return null;
      }

      const isImage =
        file.type.startsWith("image/") ||
        /\.(jpe?g|png|webp|bmp|gif)$/i.test(file.name);
      const isPdf =
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf");

      if (isImage) {
        newImageCount++;
      } else if (isPdf) {
        newPdfCount++;
      } else {
        toast.error(
          `Unsupported file: ${file.name}. Only images (JPG, PNG, WEBP) and PDF files are allowed.`,
        );
        return null;
      }
    }

    if (existingImages + newImageCount > 5) {
      toast.error(
        `Maximum 5 images allowed. You already have ${existingImages} image(s) uploaded.`,
      );
      return null;
    }

    if (existingPdfs + newPdfCount > 1) {
      toast.error(
        `Maximum 1 PDF file allowed. You already have ${existingPdfs} PDF file uploaded.`,
      );
      return null;
    }

    const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10 MB limit
    if (existingSize + newSize > MAX_TOTAL_SIZE) {
      const currMB = (existingSize / (1024 * 1024)).toFixed(2);
      const newMB = (newSize / (1024 * 1024)).toFixed(2);
      toast.error(
        `Total file size exceeds the 10 MB limit (Current: ${currMB} MB + New: ${newMB} MB).`,
      );
      return null;
    }

    return { files: newFiles };
  };

  const handleInputFileChange = async (event) => {
    const rawFiles = event.target.files;
    if (!rawFiles || rawFiles.length === 0) {
      return;
    }

    const validationResult = validateFiles(rawFiles);
    if (!validationResult) {
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    const { files } = validationResult;
    setUploading(true);

    try {
      const uploadPromises = files.map(async (file) => {
        const url = await uploadSingleFile(file);
        const isPdf =
          file.type === "application/pdf" ||
          file.name.toLowerCase().endsWith(".pdf");
        let previewUrl = "";
        if (!isPdf) {
          try {
            previewUrl = URL.createObjectURL(file);
          } catch (e) {
            previewUrl = url;
          }
        }
        return {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          url: url,
          size: file.size,
          type: isPdf ? "pdf" : "image",
          previewUrl: previewUrl || url,
        };
      });

      const newUploadedItems = await Promise.all(uploadPromises);

      setUploadedFilesList((prev) => [...prev, ...newUploadedItems]);

      toast.success(
        newUploadedItems.length === 1
          ? `"${newUploadedItems[0].name}" uploaded successfully.`
          : `${newUploadedItems.length} files uploaded successfully.`,
      );
    } catch (error) {
      console.error("Upload failed", error);
      if (
        error?.response?.status === 401 ||
        error?.response?.data?.message
          ?.toLowerCase()
          .includes("invalid token") ||
        error?.response?.data?.message?.toLowerCase().includes("deactivated")
      ) {
        localStorage.removeItem("fg_group_user_authorization");
        setIsLogin(false);
        setUserData("");
        setShowModal(true);
        toast.error("Session expired. Please log in to upload files.");
      } else {
        toast.error(
          "Upload failed: " +
            (error?.response?.data?.message || error.message || ""),
        );
      }
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
      setUploading(false);
    }
  };

  const handleRemoveFile = (idToRemove) => {
    setUploadedFilesList((prev) => {
      const item = prev.find((f) => f.id === idToRemove);
      if (item && item.previewUrl && item.previewUrl.startsWith("blob:")) {
        try {
          URL.revokeObjectURL(item.previewUrl);
        } catch (e) {
          console.error("Error revoking URL", e);
        }
      }
      const updated = prev.filter((f) => f.id !== idToRemove);
      toast.info(`Removed ${item?.name || "file"}`);
      return updated;
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const submitComplaint = async (explicitUserId) => {
    const currentInputs = formInputsRef.current;
    const currentFiles = uploadedFilesListRef.current;

    const finalMedia = currentFiles.map((f) => f.url).join(",");

    if (!finalMedia || currentFiles.length === 0) {
      toast.error("Please upload evidence proof (images or PDF).");
      return;
    }

    const activeUserId = explicitUserId || getUserId() || userData;

    if (!activeUserId) {
      toast.error("User ID not found. Please refresh the page or login again.");
      return;
    }

    setLoading(true);

    // Ensure user profile has name and email saved if default/empty
    await syncUserProfile(
      currentInputs.fullName,
      currentInputs.email,
      currentInputs.mobile,
    );

    const attachmentsNote =
      currentFiles.length > 0
        ? `\n\nAttachments (${currentFiles.length}):\n` +
          currentFiles
            .map((f, idx) => `${idx + 1}. ${f.name}: ${f.url}`)
            .join("\n")
        : "";

    const combinedMessage = `Name: ${currentInputs.fullName}\nPhone: ${currentInputs.mobile}\nEmail: ${currentInputs.email}\n\nComplaint:\n${currentInputs.complaintText}${attachmentsNote}`;

    const payload = {
      complaint: "General Complaint",
      message: combinedMessage,
      company_name: "gls",
      user_id: activeUserId,
      complaint_media: finalMedia,
      first_name: currentInputs.fullName.split(" ")[0] || "",
      last_name: currentInputs.fullName.split(" ").slice(1).join(" ") || "",
      mobile: currentInputs.mobile,
      email: currentInputs.email,
    };

    try {
      const result = await axiosInstance.post(
        "/complaint-chatbot/create",
        payload,
      );
      if (result && result.data) {
        toast.success("Your complaint has been submitted successfully!");
        setFormInputs((prev) => ({
          ...prev,
          fullName: prev.fullName,
          mobile: prev.mobile,
          email: prev.email,
          complaintText: "",
          complaint_media: "",
        }));
        setUploadedFilesList([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.error("Error submitting complaint", error);
      if (
        error?.response?.status === 401 ||
        error?.response?.data?.message
          ?.toLowerCase()
          .includes("invalid token") ||
        error?.response?.data?.message?.toLowerCase().includes("deactivated")
      ) {
        localStorage.removeItem("fg_group_user_authorization");
        setIsLogin(false);
        setUserData("");
        setShowModal(true);
        toast.error(
          "Account session expired or deactivated. Please log in again with an active account.",
        );
      } else {
        toast.error(
          error?.response?.data?.message ||
            "Failed to submit complaint. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!formInputs.fullName || !formInputs.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!formInputs.mobile || formInputs.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formInputs.email || !emailRegex.test(formInputs.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formInputs.complaintText || !formInputs.complaintText.trim()) {
      toast.error("Please describe your concern or query.");
      return;
    }

    if (uploading) {
      toast.info("Please wait while files finish uploading.");
      return;
    }

    if (uploadedFilesList.length === 0) {
      toast.error("Please upload evidence proof (images or PDF).");
      return;
    }

    const token = localStorage.getItem("fg_group_user_authorization");
    const loggedIn = isLogin || !!token;

    if (!loggedIn) {
      pendingSubmitRef.current = true;
      toast.info("Please login to submit your ticket.");
      setShowModal(true);
      return;
    }

    await submitComplaint();
  };

  return (
    <>
      <Helmet>
        <title>Help Center Ticket Submission | Gomzi Lifesciences</title>
        <meta
          name="description"
          content="Submit your complaint, feedback, or query regarding Gomzi Lifesciences manufacturing orders, packaging, or delivery."
        />
      </Helmet>
      <NutritionHeader />

      <main className="hc-page-wrapper">
        {/* 1. Hero Section */}
        <section className="hcf-hero-section">
          <div className="container">
            <div className="hc-badge">
              <i className="fas fa-ticket-alt"></i> Ticket Submission
            </div>
            <h1 className="hc-hero-title">
              We're Here to <span className="highlight">Support You</span>
            </h1>
            <p className="hc-hero-desc">
              Have a concern about your order, product quality, packaging, or
              timelines? Submit your details below and our management team will
              review and resolve it promptly.
            </p>
          </div>
        </section>

        {/* 2. Main Form & Support Info Section */}
        <section className="hcf-main-section">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {/* Left Column: Support Info */}
              <div className="col-lg-5">
                <div className="hcf-info-card">
                  <h2 className="hcf-info-title">Need Direct Help?</h2>
                  <p className="hcf-info-desc">
                    Our customer success and operations teams are active 6 days
                    a week to ensure your contract manufacturing experience is
                    seamless and transparent.
                  </p>

                  {/* Operating Hours Card */}
                  <div className="hcf-operating-hours">
                    <h5>
                      <i className="fas fa-clock"></i> Operating Hours
                    </h5>
                    <p>
                      <strong>Monday – Saturday:</strong> 10:00 AM – 06:00 PM
                    </p>
                    <p className="text-muted">
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>

                  {/* Quick Contact Links */}
                  <div className="hcf-contact-list">
                    <a
                      href="mailto:info@gomzilifesciences.in"
                      className="hcf-contact-item"
                    >
                      <div className="hcf-contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="hcf-contact-text">
                        <h6>Email Address</h6>
                        <span>info@gomzilifesciences.in</span>
                      </div>
                    </a>
                  </div>

                  {/* Turnaround Guarantee Badge */}
                  <div className="hcf-guarantee-badge">
                    <i className="fas fa-shield-alt"></i>
                    <p>
                      <strong>Prompt Response Guarantee:</strong> Every
                      submitted ticket is logged and reviewed within 24 to 48
                      business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Ticket Submission Form */}
              <div className="col-lg-7">
                <div className="hcf-form-card">
                  <h2 className="hcf-form-card-title">
                    Submit A Concern / Query
                  </h2>
                  <p className="hcf-form-card-desc">
                    Please provide comprehensive details so we can investigate
                    and address your concern accurately.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">
                      {/* Full Name */}
                      <div className="col-12 mb-3">
                        <label className="hcf-label" htmlFor="hcf-fullname">
                          Full Name <span className="required">*</span>
                        </label>
                        <div className="hcf-input-wrap">
                          <i className="fas fa-user hcf-input-icon"></i>
                          <input
                            id="hcf-fullname"
                            type="text"
                            className="hcf-input"
                            placeholder="Enter your full name"
                            name="fullName"
                            value={formInputs.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="col-md-6 mb-3">
                        <label className="hcf-label" htmlFor="hcf-mobile">
                          Phone Number <span className="required">*</span>
                        </label>
                        <div className="hcf-input-wrap">
                          <i className="fas fa-phone hcf-input-icon"></i>
                          <input
                            id="hcf-mobile"
                            type="tel"
                            className="hcf-input"
                            placeholder="10-digit mobile number"
                            name="mobile"
                            value={formInputs.mobile}
                            onChange={handleInputChange}
                            maxLength={10}
                            required
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="col-md-6 mb-3">
                        <label className="hcf-label" htmlFor="hcf-email">
                          Email Address <span className="required">*</span>
                        </label>
                        <div className="hcf-input-wrap">
                          <i className="fas fa-envelope hcf-input-icon"></i>
                          <input
                            id="hcf-email"
                            type="email"
                            className="hcf-input"
                            placeholder="your.email@example.com"
                            name="email"
                            value={formInputs.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Concern / Query Textarea */}
                      <div className="col-12 mb-3">
                        <label
                          className="hcf-label"
                          htmlFor="hcf-complaint-text"
                        >
                          Your Concern / Query Details{" "}
                          <span className="required">*</span>
                        </label>
                        <textarea
                          id="hcf-complaint-text"
                          className="hcf-textarea"
                          rows="5"
                          placeholder="Please describe your concern, order reference, batch number, or inquiry in detail..."
                          name="complaintText"
                          value={formInputs.complaintText}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>

                      {/* File Upload Box */}
                      <div className="col-12 mb-4">
                        <label className="hcf-label">
                          Upload Evidence / Proof{" "}
                          <span className="required">*</span>
                        </label>
                        <div
                          className={`hcf-file-upload-box ${uploadedFilesList.length >= 6 ? "disabled" : ""}`}
                          onClick={() => {
                            if (uploadedFilesList.length >= 6) {
                              toast.warning(
                                "Maximum 6 files limit reached. Please remove a file to upload another.",
                              );
                              return;
                            }
                            fileInputRef.current?.click();
                          }}
                        >
                          <i className="fas fa-cloud-upload-alt hcf-file-upload-icon"></i>
                          <div className="hcf-file-upload-text">
                            {uploading
                              ? "Uploading files, please wait..."
                              : uploadedFilesList.length === 0
                                ? "Click to upload image or document proof"
                                : uploadedFilesList.length >= 6
                                  ? "Maximum 6 files uploaded (Limit reached)"
                                  : `Click to add more files (${uploadedFilesList.length}/6 uploaded)`}
                          </div>
                          <div className="hcf-file-upload-subtext">
                            Supports JPG, PNG, PDF up to 10MB (Max 5 images
                            &amp; 1 PDF)
                          </div>
                          <input
                            type="file"
                            className="hcf-file-input"
                            accept="image/jpeg,image/png,image/jpg,image/webp,application/pdf"
                            onChange={handleInputFileChange}
                            ref={fileInputRef}
                            multiple
                            disabled={
                              uploadedFilesList.length >= 6 || uploading
                            }
                          />
                        </div>

                        {/* Uploaded Evidence Preview Grid with Close / Remove Button */}
                        {uploadedFilesList.length > 0 && (
                          <div className="hcf-preview-grid">
                            {uploadedFilesList.map((item) => (
                              <div key={item.id} className="hcf-preview-card">
                                {item.type === "image" ? (
                                  <img
                                    src={item.previewUrl || item.url}
                                    alt={item.name}
                                    className="hcf-preview-img"
                                  />
                                ) : (
                                  <div className="hcf-preview-pdf">
                                    <i className="fas fa-file-pdf hcf-preview-pdf-icon"></i>
                                    <span
                                      className="hcf-preview-pdf-name"
                                      title={item.name}
                                    >
                                      {item.name}
                                    </span>
                                  </div>
                                )}
                                <button
                                  type="button"
                                  className="hcf-preview-remove-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFile(item.id);
                                  }}
                                  title="Remove file"
                                  aria-label={`Remove ${item.name}`}
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                                <div
                                  className="hcf-preview-caption"
                                  title={item.name}
                                >
                                  {item.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Upload Success Badge */}
                        {uploadedFilesList.length > 0 && (
                          <div className="hcf-upload-success-badge">
                            <i className="fas fa-check-circle"></i>{" "}
                            {uploadedFilesList.length}{" "}
                            {uploadedFilesList.length === 1 ? "file" : "files"}{" "}
                            ready (
                            {(
                              uploadedFilesList.reduce(
                                (acc, f) => acc + f.size,
                                0,
                              ) /
                              (1024 * 1024)
                            ).toFixed(2)}{" "}
                            MB / 10 MB)
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button
                          type="submit"
                          disabled={loading || uploading}
                          className="hcf-submit-btn"
                        >
                          {loading ? (
                            <>
                              <i className="fas fa-spinner fa-spin"></i>{" "}
                              Submitting Ticket...
                            </>
                          ) : uploading ? (
                            <>
                              <i className="fas fa-spinner fa-spin"></i>{" "}
                              Uploading Files...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane"></i> Submit
                              Concern
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBotGomziComponent />
      <NutritionFooter />
      {showModal && (
        <LoginModal
          onClose={closeModal}
          initialMobile={formInputs.mobile}
          initialFullName={formInputs.fullName}
          initialEmail={formInputs.email}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default ComplaintForm;
