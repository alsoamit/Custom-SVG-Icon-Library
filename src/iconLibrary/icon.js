import React from "react";
import { ICONS } from "./consts"; //importing d values from consts.js

const Icon = ({ icon, color, size, className }) => (
  // arrow function to return the svg icon.
  <svg
    width={size}
    height={size}
    fill={color}
    className={className}
    viewBox="0 0 1024 1024"
  >
    <path d={ICONS[icon]}></path>
  </svg>
);

// default properties for icons
Icon.defaultProps = {
  color: "black",
  size: "25",
  className: "icon",
};

export default Icon; // exporting the icon
