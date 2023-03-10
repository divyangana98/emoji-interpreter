import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "๐": "Smiling face",
  "๐": "Grinning face",
  "๐": "Lauging with tears",
  "๐": "Upside down face",
  "๐": "Winking face",
  "๐": "Smiling face with halo",
  "๐": "Smiling face with sunglasses",
  "๐ค": "Nerdy face",
  "๐ฅณ": "Partying face",
  "๐ฅฐ": "Smiling face with hearts",
  "๐": "Neutral face",
  "๐คจ": "Face with raised eyebrow",
  "๐": "	Smirking face",
  "๐": "	Unamused face",
  "๐": "Pensive face",
  "๐ท": "Face with mask",
  "๐": "Worried face",
  "๐ฐ": "Anxious face with sweat",
  "๐คก": "	Clown",
  "๐ป": "	Ghost"
};

var emojiArray = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputClickHandler(event) {
    var inputValue = event.target.value;
    if (inputValue in emojiDictionary) {
      meaning = emojiDictionary[inputValue];
      setMeaning(meaning);
    } else if (inputValue === "") {
      setMeaning("");
    } else {
      setMeaning("Emoji not in dictionary");
    }
  }

  function clearHandler() {
    setMeaning("");
    var p = document.querySelector(".userInput");
    p.value = "";
  }

  function emojiClickHandler(item) {
    meaning = emojiDictionary[item];
    setMeaning(meaning);
    var p = document.querySelector(".userInput");
    p.value = item;
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input className="userInput" onChange={inputClickHandler} />
      <div style={{ padding: "0.5rem", fontWeight: "bold", color: "blue" }}>
        {meaning}
      </div>
      <button className="clearButton" onClick={clearHandler}>
        Clear
      </button>
      <div style={{ fontWeight: "bold" }}>
        <h3>Emojis We know</h3>
      </div>
      <div className="emojiList">
        {emojiArray.map((item) => {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => emojiClickHandler(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
