import React from "react";
import styles from "./Label.module.scss";

const Label = ({ children }) => {
  return <span className={styles.root}>{children}</span>;
};

export default Label;
