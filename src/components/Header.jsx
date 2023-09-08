import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="admin-header">
      <Dropdown
        icon={"bx bx-bell"}
        menuClass="dropdown-menu-notifications"
        menu={
          <>
            <li className="dropdown-list">
              <Link
                to="/admin/dashboard"
                className="dropdown-link dropdown-link-notification"
              >
                <div className="notification-icon">
                  <i className="bx bxs-megaphone"></i>
                </div>
                <div className="notification-details">
                  <h1 className="notification-title">Notification Title</h1>
                  <p className="notification-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat illo dolores, quo possimus incidunt dolor.
                  </p>
                </div>
              </Link>
            </li>

            <li className="dropdown-list">
              <Link
                to="/admin/dashboard"
                className="dropdown-link dropdown-link-notification"
              >
                <div className="notification-icon">
                  <i className="bx bxs-megaphone"></i>
                </div>
                <div className="notification-details">
                  <h1 className="notification-title">
                    Notification Test
                  </h1>
                  <p className="notification-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat illo dolores, quo possimus incidunt dolor.
                  </p>
                </div>
              </Link>
            </li>
          </>
        }
      />

      <Dropdown
        avatar={"https://cdn.pixabay.com/photo/2017/08/05/22/58/man-2586410_1280.jpg"}
        menu={
          <>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link">
                <i className="bx bx-user dropdown-link-icon"></i>
                Mon profil
              </Link>
            </li>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link">
                <i className="bx bx-power-off dropdown-link-icon"></i>
                Se déconecter
              </Link>
            </li>
          </>
        }
      />
    </div>
  );
};

export default Header;
