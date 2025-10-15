import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function App() {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
    }}>
     

      

    

      
        <div style={{ marginTop: "10px" }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
   
    </div>
  );
}

export default App;
