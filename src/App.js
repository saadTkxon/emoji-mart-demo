import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function App() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiData) => {
    setChosenEmoji(emojiData.emoji);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333" }}> Emoji Picker Demo</h1>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        Click on an emoji below to see it appear here:
      </p>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <EmojiPicker onEmojiClick={onEmojiClick} />
      </div>

      {chosenEmoji && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "2rem",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#e0f7fa",
            color: "#00796b",
          }}
        >
          You selected: {chosenEmoji}
        </div>
      )}

      <div style={{ marginTop: "30px", color: "#777", fontSize: "0.9rem" }}>
        <p>
          🚀 This is a demo project showing how to integrate an emoji picker
          with React. Ideal for chat apps, comments, or reactions.
        </p>
        <p>
           GitHub Repo:{" "}
          <a
            href="https://github.com/yourusername/emoji-picker-demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0073b1" }}
          >
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
