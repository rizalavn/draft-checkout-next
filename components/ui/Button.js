/*
Variants:
 - Default Button
 - Block Button
 - Outlined Button
 - Text Button
 - Icon Button

 Corners:
 - Rounded Button
 - Square Button
 - Cicle Button (for Icon Button only)
*/

import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  className,
  variant,
  icon,
  corner,
  block,
  children,
  ...rest
}) => {
  const classNames = cn(
    styles.root,
    {
      [styles[variant]]: variant,
      [styles["icon"]]: icon,
      [styles[corner]]: corner,
      [styles["block"]]: block,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
