import React from "react";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        User Data <span className="user_name">{user.name}</span>
      </h1>
      <button className="logout_button" onClick={(e) => handleLogout(e)}>
        logout
      </button>
    </div>
  );
};

export default Logout;
