import React,{useState} from 'react'
import { Simulate } from 'react-dom/test-utils';
import './App.css'
var emojiDictionary={
  "😂":"Crying Out Loud",
  "😢":"Whining",
  "😏":"Whats Up Smile",
  "😊":"Smile without Teeth",
  "🐶":"Dog",
  "😒":"Staring",
  "🔎":"Search",
  "🏴‍☠️":"Pirate",
  "🥰":"Love",
  "🍌":"Banana"
}
function App() {
  const [meaning, setMeaning]= useState("");

  const emojis=Object.keys(emojiDictionary);
  console.log(emojis);
  function emojiInputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning=== undefined){
      meaning = "We dont have this in our database"
    }
    setMeaning(meaning);
  }
  function emojiHandler(emoji){
 var meaning=emojiDictionary[emoji];
 setMeaning(meaning);
  }
  return(
     <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emoji we Know</h3>
      {emojis.map(function(emoji) {
        
        return<span
        key={emoji}
        style={{fontSize:"2rem", padding:"0.5rem 1rem",cursor:'pointer'}}
        onClick={()=>emojiHandler(emoji)}
        >{emoji}</span>
      }) }
     </div>
  )
}

export default App;
