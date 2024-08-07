import React from "react";
import styles from "./pdfViewer.module.scss";

const Preview = ({ selectedFile }) => {
  return (
    <div className={styles.preview}>
      {selectedFile ? (
        <img
          src={`/images/${selectedFile.name.replace(".pdf", "")}.png`}
          alt={selectedFile.name}
          className={styles.previewImage}
        />
      ) : (
        <h2>Select a PDF to preview</h2>
      )}
    </div>
  );
};

export default Preview;
