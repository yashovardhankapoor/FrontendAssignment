import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import Sidebar from "./components/sidebar";
import Preview from "./components/pdfViewer";
import Chat from "./components/chat";
import styles from "./mainLayout.module.scss";

const MainLayout = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const files = [{ name: "ace-equity.pdf" }];
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, [files]);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className={styles.mainLayout}>
      <Sidebar files={files} onFileSelect={handleFileSelect} />
      <Resizable
        defaultSize={{ width: 800, height: "100%" }}
        minWidth={300}
        maxWidth={800}
        enable={{ right: true, left: true }}
        style={{ overflow: "hidden" }}
      >
        <Preview selectedFile={selectedFile} />
      </Resizable>
      <Chat />
    </div>
  );
};

export default MainLayout;
