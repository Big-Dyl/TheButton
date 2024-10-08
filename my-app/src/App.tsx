import React from 'react';
import image from './button.webp';
import './App.css'
let c = localStorage.getItem("count");
let count = c ? parseInt(c) : 0;
const button = <img src = {image} onClick = {()=>{
  count++
  (document.getElementById("count") as HTMLElement).innerHTML = `you have pressed the button ${count} times`
  localStorage.setItem("count", count.toString());
}}></img>


function App() {
  return (
    <div className="App">
        {button}
        <p id = "count">you have pressed the button {count} times</p>
    </div>
  );
}

export default App;
