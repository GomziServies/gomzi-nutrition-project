import React, { useEffect, useState } from "react";
import LoginModal from "../popup/login";
import { axiosInstance } from "../config/api";
import { toast } from "react-toastify";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
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

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
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
    } else {
      setUserInfo(JSON.parse(user_info));
    }
  }, [authorization]);

  return (
    <div>
      {userInfo ? (
        <>
          <li
            className="mb-1 cursor-pointer inter-500"
            onClick={toggleUserMenu}
          >
            Hi, {userInfo.user.last_name} <i className="far fa-user"></i>
          </li>
          {isUserMenuVisible && (
            <ul>
              <li>
                <a href={`/user/profile`} className="inter-500">
                  <i className="far fa-user"></i> Profile
                </a>
              </li>
              <li className="mr-0">
                <a href={`/user/order`} className="inter-500">
                  <i className="fas fa-box mr-1 fts-18"></i>Orders
                </a>
              </li>
              <li className="mr-0">
                <a href={`/invoice`} className="inter-500">
                  <i className="fas fa-box mr-1 fts-18"></i>Invoice
                </a>
              </li>

              <li onClick={logout}>
                <button
                  className="video-button-bg inter-500"
                  aria-label="Logout from your account"
                >
                  <i className="fas fa-sign-out-alt"></i> Log Out
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <li className="ddmenu userInfo fts-18">
          <button
            onClick={openModal}
            className=" video-button-bg px-0 cursor-pointer inter-500"
            aria-label="Login to your account"
          >
            {" "}
            Login <i className="far fa-user ml-1"></i>
          </button>
          {showModal && <LoginModal onClose={closeModal} />}
        </li>
      )}
    </div>
  );
};

export default UserInfo;
