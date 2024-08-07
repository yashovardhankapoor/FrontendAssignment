import React from "react";
import styles from "./pdfHeader.module.scss";

const PreviewHeader = ({ fileName }) => {
  return (
    <div className={styles.previewHeader}>
      <div className={styles.previewTitle}>{fileName}</div>
    </div>
  );
};

export default PreviewHeader;
