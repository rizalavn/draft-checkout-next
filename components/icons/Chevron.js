import React from "react";

const Chevron = ({ ...rest }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 9 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99993 13.6668C1.65859 13.6668 1.31726 13.5362 1.05726 13.2762C0.535926 12.7548 0.535926 11.9122 1.05726 11.3908L5.46393 6.98417L1.22393 2.5935C0.71326 2.06284 0.727926 1.21884 1.25726 0.708169C1.78793 0.197503 2.63193 0.212169 3.14259 0.740169L8.29193 6.0735C8.79726 6.5975 8.79059 7.42817 8.27593 7.94284L2.94259 13.2762C2.68259 13.5362 2.34126 13.6668 1.99993 13.6668Z"
      />
    </svg>
  );
};

export default Chevron;
