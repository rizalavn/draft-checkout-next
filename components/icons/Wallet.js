import React from "react";

const Wallet = ({ fill = "currentColor", ...rest }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 28"
      stroke={fill}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="2.5" y="6" width="23" height="16" rx="3" strokeWidth="2" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="5"
        width="26"
        height="18"
      >
        <rect
          x="2.5"
          y="6"
          width="23"
          height="16"
          rx="3"
          fill="white"
          stroke="white"
          strokeWidth="2"
        />
      </mask>
      <rect x="2.5" y="9.5" width="23" height="3.75" strokeWidth="2" />
      <path
        d="M6.30493 17.0809H15.0549"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet;
