import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { axiosInstance } from "../config/api";
import { Link } from "react-router-dom";
import "../../css/nutrition.css";

const LoginModal = ({
  onClose,
  initialMobile,
  initialFullName,
  initialEmail,
  onLoginSuccess,
}) => {
  const [showModal, setShowModal] = useState(true);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState(initialMobile || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [password, setPassword] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpDialogOpen, setEmailOtpDialogOpen] = useState(false);
  const [verificationId, setVerificationId] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (initialMobile) {
      setMobileNumber(initialMobile);
    }
  }, [initialMobile]);

  const handleClose = () => {
    setShowModal(false);
    setShowSignUpModal(false);
    onClose();
  };

  const getUserData = async () => {
    const auth = localStorage.getItem("fg_group_user_authorization");
    if (!auth) return null;

    try {
      const response = await axiosInstance.get("/account/profile");
      const data = response?.data?.data;
      const user = data?.user || data;

      const first = (user?.first_name || "").trim();
      const last = (user?.last_name || "").trim();
      const full = `${first} ${last}`.trim().toLowerCase();
      const isDefaultFirst = !first || first.toLowerCase() === "fg";
      const isDefaultLast = !last || last.toLowerCase() === "user";
      const isDefault =
        isDefaultFirst || isDefaultLast || full === "fg user" || !full;
      const isEmailEmpty = !user?.email || !user?.email.trim();
      const currentEmail = (email || initialEmail || "").trim();

      if ((isDefault || isEmailEmpty) && (initialFullName || currentEmail)) {
        const nameParts = (initialFullName || "")
          .trim()
          .split(/\s+/)
          .filter(Boolean);
        const firstName = nameParts[0] || "";
        const lastName =
          nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
        const updatePayload = {};

        if (isDefault && firstName) {
          updatePayload.first_name = firstName;
          updatePayload.last_name = lastName;
        }
        if (isEmailEmpty && currentEmail) {
          updatePayload.email = currentEmail;
        }

        if (Object.keys(updatePayload).length > 0) {
          if (user?.mobile || mobileNumber || initialMobile) {
            updatePayload.mobile = user?.mobile || mobileNumber || initialMobile;
          }
          if (user?.uid) {
            updatePayload.user_id = user.uid;
          }
          try {
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
              return refetched.data.data;
            }
          } catch (updateErr) {
            console.error(
              "Failed to auto-update profile with form data in login modal:",
              updateErr,
            );
          }
        }
      }

      if (response?.data?.data) {
        const u = response.data.data.user || response.data.data;
        if (u) {
          if ((u.first_name || "").trim().toLowerCase() === "fg")
            u.first_name = "";
          if ((u.last_name || "").trim().toLowerCase() === "user")
            u.last_name = "";
        }
        localStorage.setItem("user_info", JSON.stringify(response.data.data));
        window.dispatchEvent(new Event("user-info-updated"));
      }
      return response?.data?.data;
    } catch (error) {
      console.error("Error in getUserData:", error);
      return null;
    }
  };

  const handleLogin = async () => {
    const trimmedEmail = (email || "").trim();
    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post("/account/authorization", {
        email: trimmedEmail.toLowerCase(),
      });

      if (response.data && response.data.data && response.data.data.OTP) {
        setOtpCode(response.data.data.OTP);
      }
      if (
        response.data &&
        response.data.data &&
        response.data.data.verification_id
      ) {
        setVerificationId(response.data.data.verification_id);
      }

      setShowModal(false);
      handleOtpPopupOpen();
      toast.success(
        response.data?.message || "OTP Sent on your email address.",
      );
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        "Failed to send OTP. Please try again.";
      toast.error(msg);
      console.error("Error in handleLogin:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginEmail = async () => {
    try {
      const response = await axiosInstance.post("/account/login", {
        email,
        password,
      });

      if (response.data.data.authorization) {
        localStorage.setItem(
          "fg_group_user_authorization",
          response.data.data.authorization,
        );
        await getUserData();
        toast.success("Successfully Login!");
        if (onLoginSuccess) {
          onLoginSuccess(response.data.data.authorization);
        } else {
          handleClose();
        }
      } else {
        setShowSignUpModal(false);
        setEmailOtpDialogOpen(true);
      }
    } catch (error) {
      toast.error("Invalid Password or Email");
      console.error("Error in handleLogin:", error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setShowSignUpModal(false);
      const response = await axiosInstance.post("/account/email-verification", {
        email: email,
        otp: emailOtp,
      });
      if (response.status === 200) {
        localStorage.setItem(
          "fg_group_user_authorization",
          response.data.data.authorization,
        );
        await getUserData();
        setEmailOtpDialogOpen(false);
        toast.success("Successfully Login!");
        if (onLoginSuccess) {
          onLoginSuccess(response.data.data.authorization);
        } else {
          window.location.reload();
        }
      } else {
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error in handleOtpSubmit:", error);
    }
  };

  const handleOtpSubmit = async () => {
    const trimmedOtp = (otpCode || "").trim();
    if (!trimmedOtp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      setVerifying(true);
      const payload = {
        otp: trimmedOtp,
      };

      if (email && email.trim()) {
        payload.email = email.trim().toLowerCase();
      } else if (mobileNumber) {
        payload.mobile = mobileNumber;
      }

      if (verificationId) {
        payload.verification_id = verificationId;
      }

      const response = await axiosInstance.post(
        "/account/authorization/verify",
        payload,
      );

      if (response.status === 200) {
        const token =
          response.data?.data?.authorization || response.data?.data?.token;
        if (token) {
          localStorage.setItem("fg_group_user_authorization", token);
        }
        await getUserData();
        setOtpDialogOpen(false);
        toast.success("Successfully Login!");
        if (onLoginSuccess) {
          onLoginSuccess(token || response.data?.data?.authorization);
        } else {
          window.location.reload();
        }
      } else {
        toast.error(
          response.data?.message || "Failed to verify OTP. Please try again.",
        );
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        "Failed to verify OTP. Please try again.";
      toast.error(msg);
      console.error("Error in handleOtpSubmit:", error);
    } finally {
      setVerifying(false);
    }
  };

  const handleOtpPopupOpen = () => {
    setOtpDialogOpen(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleCloseEmailOtpModal = () => {
    setEmailOtpDialogOpen(false);
    setEmailOtp("");
  };

  const handleCloseOtpModal = () => {
    setOtpDialogOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (localStorage.getItem("fg_group_user_authorization")) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            <div className="text-center">
              <Link to="/">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "../assets/images/logo/gomzi-life-science-logo.webp"
                    }
                    width="40%"
                    alt="Fg Group"
                  />
                </div>
              </Link>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <Form.Group
              controlId="formBasicUsername"
              className="mb-4 text-center"
            >
              <Form.Label className="label_modal text-center mb-2 inter-500">
                OTP Verification
              </Form.Label>
              <Form.Control
                type="email"
                className="fr"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit_modal login-submit-btn  barlow-condensed-semi "
              disabled={loading}
            >
              {loading ? "Sending..." : "Log In"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={otpDialogOpen} onHide={handleCloseOtpModal} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            <div className="text-center">
              <Link to="/">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "../assets/images/logo/gomzi-life-science-logo.webp"
                    }
                    width="40%"
                    alt="Fg Group"
                  />
                </div>
              </Link>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleOtpSubmit();
            }}
          >
            <Form.Group
              controlId="formBasicUsername"
              className="mb-4 text-center"
            >
              <Form.Label className="label_modal text-center mb-2">
                Enter OTP Here
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP Here"
                name="otpCode"
                className="fr"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit_modal login-submit-btn"
              disabled={verifying}
            >
              {verifying ? "Verifying..." : "Verify Otp"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        Modal
        show={showSignUpModal}
        onHide={handleCloseSignUpModal}
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            <div className="text-center">
              <span
                className="clr1 login-signUp-font-color"
                id="lbl_modal_email"
              >
                Login / Signup
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="field_modal margin-20-0-important">
              <Form.Label className="label_modal">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="fr"
              />
            </div>
            <div className="field_modal margin-20-0-important">
              <Form.Label className="label_modal mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="fr"
              />
            </div>
            <div className="margin-20-0-important">
              <button
                className="mt-4 sing-up-btn btn"
                type="button"
                onClick={handleLoginEmail}
              >
                Submit
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        Modal
        show={emailOtpDialogOpen}
        onHide={handleCloseEmailOtpModal}
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            <div className="text-center">
              <span
                className="clr1 login-signUp-font-color"
                id="lbl_modal_email"
              >
                Login / Signup
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="field_modal margin-20-0-important">
              <Form.Label className="label_modal">Enter Otp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP here"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                className="fr"
              />
            </div>
            <div className="margin-20-0-important">
              <button
                className="mt-4 sing-up-btn btn"
                type="button"
                onClick={handleVerifyOTP}
              >
                Verify
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
