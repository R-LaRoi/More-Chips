import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="h1"> MORE CHIPS</div>
      <span>
        <a href="#tue">tue</a>
      </span>{" "}
      {""}
      <span>wed</span> {""}
      <span>
        {" "}
        {""}
        <a href="#mon">mon</a>
      </span>{" "}
      {""}
      <span>fri</span>
    </div>
  );
}
