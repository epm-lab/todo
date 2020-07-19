import React from "react";
import styles from "./CustomInput.module.css";

export const Input = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error;
  const { text, isModal } = props.val;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span>{meta.error}</span>}
      {isModal? 
      <input {...input} {...props} className={props.className} value={ input.value? input.value : text }/> :
      <input {...input} {...props} className={props.className} />
      }
    </div>
  );
};
