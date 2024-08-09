import React, { useState } from "react";
import styles from "./chat.module.scss";
import ChatHeader from "./chatHeader";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Update the messages state with the user's message and the bot's reply
      const newMessages = [
        { text: inputValue, sender: "user" },
        { text: inputValue, sender: "bot" },
      ];
      setMessages([...newMessages, ...messages]);

      // Clear the input field
      setInputValue("");
    }
  };

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
        {messages.length === 0 ? (
          <p>Your chat messages will appear here.</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? styles.userMessage
                  : styles.botMessage
              }
            >
              {message.text}
            </div>
          ))
        )}
      </div>
      <div className={styles.chatInputContainer}>
        <form onSubmit={handleSendMessage} style={{ width: "100%" }}>
          <input
            type="text"
            className={styles.chatInput}
            placeholder="Ask any question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
