import React from "react";
import "./topbar.css";
import { PowerSettingsNewOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logingout } from "../../redux/apiCalls";
import { useSelector } from "react-redux";

export default function Topbar() {
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logingout(dispatch);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
            <PowerSettingsNewOutlined onClick={handleClick} disabled={isFetching}/>
          </div>
        </div>
      </div>
    </div>
  );
}
