import { useState } from "react";

const DATA = [
  { id: 0, name: "Sahe", value: "sahe" },
  { id: 1, name: "CobeSasssss", value: "Cobe" },
  { id: 2, name: "Goiro", value: "Goiro" },
  { id: 3, name: "Iyoi", value: "Iyoi" },
];

export default function Dropdown({
  placeholder = "Dropdown",
  className,
  block,
  center,
}) {
  const [isActive, setIsActive] = useState(false);
  const isBlock = block ? "w-full" : "w-min";
  const isCenter = center ? "text-center" : "text-left";

  const handleOnChoosenOption = (value) => {
    console.log(value, isActive);
    setIsActive(false);
  };

  return (
    <div className={`${isBlock} relative`}>
      <button
        className={`w-full px-4 py-2 flex justify-between items-center gap-2 bg-yellow-500 rounded-md font-bold ${isCenter} hover:bg-yellow-600 ${
          className || null
        }`}
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {placeholder}
        <Chevron
          className={`transform ${
            isActive ? "-rotate-90" : "rotate-90"
          } transition-transform delay-75`}
        />
      </button>

      <ul
        className={`${isBlock} mt-2 py-2 flex flex-col gap-2 absolute bg-yellow-500 rounded-md transition duration-100  ${
          isActive
            ? "ease-in transform opacity-100 scale-100"
            : "ease-out transform opacity-0 scale-95 hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        {DATA.map((item, index) => {
          return (
            <li key={item?.id || index}>
              <button
                className={`w-full ${isCenter} px-4  hover:bg-yellow-600`}
                onClick={() => handleOnChoosenOption(item.value)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
