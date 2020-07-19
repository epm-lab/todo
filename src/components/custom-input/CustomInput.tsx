import React from "react";
import styles from "./CustomInput.module.css";

export const Input = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span>{meta.error}</span>}
      <input {...input} {...props} className={props.className} />
    </div>
  );
};
