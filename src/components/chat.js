import React from 'react';
import styles from './chat.module.scss';
import ChatHeader from './chatHeader';

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <div className={styles.chatHeader}>
        <h4></h4>
        <h7>
          Here are three example questions you can ask about the file:
          <br />
          1. What types of financial data are included in the company profiles?
          <br />
          2. How can I access the annual reports linked to the financial data?
          <br />
          3. What industries are covered by the industry-specific financial
          display formats?
        </h7>
      </div>
      <div className={styles.chatContent}>
        <p>Your chat messages will appear here.</p>
      </div>
      <div className={styles.chatInputContainer}>
        <input
          type="text"
          className={styles.chatInput}
          placeholder="Ask any question..."
        />
      </div>
    </div>
  );
};

export default Chat;
