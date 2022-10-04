import React,{useState} from 'react'
import { Simulate } from 'react-dom/test-utils';
import './App.css'
var emojiDictionary={
  "😂":"Crying Out Loud",
  "😢":"Whining",
  "😏":"Whats Up Smile",
  "😊":"Smile without Teeth",
  "🐶":"Dog",
  "😒":"Staring"
}
function App() {
  const [meaning, setMeaning]= useState("");

  function emojiInputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    var n=Object.keys(emojiDictionary);
    if (meaning=== undefined){
      meaning = "We dont have this in our database"
      {
      <span>emojiDictionary.value</span>
    }
    }
    setMeaning(meaning);
  }
  return(
     <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
     </div>
  )
}

export default App;
