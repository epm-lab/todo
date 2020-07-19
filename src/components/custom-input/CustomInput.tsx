import React from "react";
import styles from "./CustomInput.module.css";

export const Input = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  console.log(input);
  console.log(meta);
  console.log(props);
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span>{meta.error}</span>}
      <input {...input} {...props} className={props.className} value={ input.value? input.value : props.val }/>
    </div>
  );
};
