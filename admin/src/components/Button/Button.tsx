import classNames from "classnames";
import { TypeButton } from "constants/constant";
import React from "react";
import styles from "./styles.module.scss";

const Button: React.FC<any> = ({ children, ...rest }) => {
  const { classNameX = "", classNameT } = rest;
  const classNameToT = () => {
    switch (classNameT) {
      case TypeButton.DELETE:
        return styles.wrapButton_delete;
      case TypeButton.EDIT:
        return styles.wrapButton_edit;
    }
  };

  const className = classNames(styles.wrapButton, classNameX, classNameToT());
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
