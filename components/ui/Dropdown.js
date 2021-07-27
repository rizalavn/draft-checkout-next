import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.scss";

import { Chevron } from "../icons";

const Dropdown = ({
  label,
  placeholder,
  options,
  className,
  center,
  block,
  ...rest
}) => {
  const node = useRef();
  const [isActive, setIsActive] = useState(false);
  const [activeValue, setActiveValue] = useState({
    name: placeholder,
    value: null,
  });
  const classNames = cn(
    styles.root,
    {
      [styles.block]: block,
      [styles.center]: center,
    },
    className
  );

  const handleOnChoosenOption = (name, value) => {
    setActiveValue({ name, value });
    setIsActive(false);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      node.current.style.zIndex = "5";
      return;
    }
    // outside click
    node.current.style.zIndex = "auto";
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} className={classNames} {...rest}>
      {label && <label>{label}</label>}
      <button
        aria-expanded="true"
        aria-haspopup="true"
        style={{
          color: activeValue.value ? "var(--color-black-500)" : null,
          fontWeight: activeValue.value ? "bold" : "normal",
        }}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {activeValue.name}
        <Chevron
          style={{ transform: isActive ? "rotate(-90deg)" : "rotate(90deg)" }}
        />
      </button>

      <ul
        className={block && styles.block}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        style={{ display: isActive ? "flex" : "none" }}
      >
        {options.map((item, index) => {
          return (
            <li key={item?.id || index}>
              <button
                onClick={() => handleOnChoosenOption(item.name, item.value)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
