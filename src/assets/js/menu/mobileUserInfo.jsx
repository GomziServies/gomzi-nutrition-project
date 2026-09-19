import React, { useEffect, useState } from "react";
import CustomModal from "../popup/login";
import { axiosInstance } from "../config/api";
import { toast } from "react-toastify";

const MobileUserInfo = () => {
  const redirectDir = "";
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const authorization = localStorage.getItem("fg_group_user_authorization");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    localStorage.removeItem("fg_group_user_authorization");
    localStorage.removeItem("user_info");
    localStorage.clear();
    setUserInfo(null);

    toast.success("Successfully Logout!");
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const user_info = localStorage.getItem("user_info");
    if (authorization && !user_info) {
      const fetchProfile = async () => {
        try {
          await http_getProfile();
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    } else if (user_info) {
      try {
        setUserInfo(JSON.parse(user_info));
      } catch (e) {}
    }
  }, [authorization]);

  useEffect(() => {
    const handleUpdate = () => {
      const user_info = localStorage.getItem("user_info");
      if (user_info) {
        try {
          setUserInfo(JSON.parse(user_info));
        } catch (e) {}
      }
    };

    window.addEventListener("user-info-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("user-info-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const getUserDisplayName = () => {
    if (!userInfo?.user) return "User";
    const first = (userInfo.user.first_name || "").trim();
    const last = (userInfo.user.last_name || "").trim();
    if (first && first.toLowerCase() !== "fg") {
      return first;
    }
    if (last && last.toLowerCase() !== "user") {
      return last;
    }
    return last || first || "User";
  };

  return (
    <>
      {userInfo ? (
        <ul>
          <li className="mb-1 cursor-pointer">
            <a href={`${redirectDir}/user/profile`}>
              Hi, {getUserDisplayName()} <i className="far fa-user"></i>{" "}
            </a>
          </li>
          <li>
            <a href={`${redirectDir}/user/profile`}>
              <i className="far fa-user"></i> Profile
            </a>
          </li>
          <li className="mr-0">
            <a href={`${redirectDir}/user/order`}>
              <i className="fas fa-box mr-3 fts-18"></i>
              Orders
            </a>
          </li>
          <li className="mr-0">
            <a href={`${redirectDir}/invoices`}>
              <i className="fas fa-box mr-3 fts-18"></i>
              Invoice
            </a>
          </li>
          <li onClick={logout} className="cursor-pointer">
            <span>
              <i className="fas fa-sign-out-alt"></i> Log Out
            </span>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <button
              onClick={openModal}
              className=" video-button-bg cursor-pointer"
              aria-label="Login to your account"
            >
              {" "}
              Login <i className="far fa-user ml-1"></i>
            </button>
            {showModal && <CustomModal onClose={closeModal} />}
          </li>
        </ul>
      )}
    </>
  );
};

export default MobileUserInfo;
