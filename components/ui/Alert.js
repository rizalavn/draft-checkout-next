import React from "react";
import cn from "classnames";
import styles from "./Alert.module.scss";

const Alert = ({ className, children, ...rest }) => {
  const classNames = cn(styles.root, className);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Alert;
