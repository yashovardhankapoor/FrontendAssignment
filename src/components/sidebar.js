import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ files, onFileSelect }) => {
  return (
    <Box
      component={motion.div}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sidebar}
    >
      <motion.button
        className={styles.newChatButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.mainText}>+ New Chat</span>
        <span className={styles.subText}>Drop PDF here</span>
      </motion.button>

      <div className={styles.buttonContainer}>
        <motion.button
          className={`${styles.smallButton} ${styles.upgradeButton}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Upgrade to Plus
        </motion.button>

        <motion.button
          className={`${styles.smallButton} ${styles.newFolderButton}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          New Folder
        </motion.button>
      </div>

      <List>
        {files.map((file, index) => (
          <ListItem
            button
            key={index}
            onClick={() => onFileSelect(file)}
            className={styles.fileItem}
          >
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
