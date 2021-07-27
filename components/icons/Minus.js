import React from "react";

const Minus = ({ ...rest }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 2"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6667 1.66659H1.33341C0.965415 1.66659 0.666748 1.36859 0.666748 0.999919C0.666748 0.631252 0.965415 0.333252 1.33341 0.333252H10.6667C11.0354 0.333252 11.3334 0.631252 11.3334 0.999919C11.3334 1.36859 11.0354 1.66659 10.6667 1.66659Z"
      />
    </svg>
  );
};

export default Minus;
