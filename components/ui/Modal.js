import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

// import Button from "./Button";
// import { Close } from "../icons";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);

  return {
    isShowing,
    toggle,
  };
};

const Modal = ({ isShowing, onHide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.overlay} onClick={onHide} />
          <div
            className={styles.root}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles.modal}>
              {/* <Button
                  variant="icon"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ background: "transparent" }}
                  onClick={onHide}
                >
                  <Close aria-hidden="true" />
                </Button> */}
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;

Modal.useModal = useModal;
