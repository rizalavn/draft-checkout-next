/*
Types:
 - Text Field
 - Text Area
 - Select -> with radio button
 - Dropdown -> via select-option

Variants:
 - Block Input
 - Default Input ->  Outlined

Corners:
 - Rounded Input
*/

import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

const Input = ({
  className,
  label = "Label",
  disabled = false,
  block,
  prefix,
  suffix,
  onChange,
  ...rest
}) => {
  const classNames = cn(
    styles.root,
    {
      [styles.block]: block,
    },
    className
  );
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    return null;
  };

  return (
    <div className={classNames}>
      <label>{label}</label>
      <div>
        {prefix && <div>{prefix}</div>}
        <input disabled={disabled} onChange={handleOnChange} {...rest} />
        {suffix && <div>{suffix}</div>}
      </div>
    </div>
  );
};

export default Input;
