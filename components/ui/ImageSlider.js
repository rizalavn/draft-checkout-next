import { useState } from "react";
import styles from "./ImageSlider.module.scss";

import { Button } from "../ui";
import { Chevron } from "../icons";

const ImageSlider = ({ srcs = [] }) => {
  const [srcToDisplay, setSrcToDisplay] = useState(0);

  const handleOnChange = (slideRight) => {
    if (slideRight) {
      if (srcToDisplay !== srcs.length - 1) {
        setSrcToDisplay((prev) => {
          return prev + 1;
        });
      } else {
        setSrcToDisplay(0);
      }
    } else {
      if (srcToDisplay !== 0) {
        setSrcToDisplay((prev) => {
          return prev - 1;
        });
      } else {
        setSrcToDisplay(srcs.length - 1);
      }
    }
    console.log(srcToDisplay);
  };

  return (
    <div className={styles.root}>
      <img src={srcs[srcToDisplay]} alt={srcs[srcToDisplay]} />
      <div>
        <Button
          icon={true}
          corner="square"
          onClick={() => handleOnChange(false)}
        >
          <Chevron style={{ transform: "rotate(180deg)" }} />
        </Button>
        <Button
          icon={true}
          corner="square"
          onClick={() => handleOnChange(true)}
        >
          <Chevron />
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
