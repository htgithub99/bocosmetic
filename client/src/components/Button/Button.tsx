import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

const Button: React.FC<any> = ({ children, ...rest }) => {
  const { classNameX = "" } = rest;
  const className = classNames(styles.wrapButton, classNameX);
  return <button {...rest} className={className}>{children}</button>;
};

export default Button;
