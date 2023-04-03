import giphy from "./assets/giphy.gif";
import React from 'react';
import './App.css';
import { useState } from 'react';
import { placeholder } from "@testing-library/react";
import Helmet from 'react-helmet'

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="App">
             <center>
            <h1>Enter AbdulRahman's Domain | HollowByte</h1>
        </center>
        { <Helmet>
          <title>Anomalous</title>
          <meta name="description" content="This is the portfolio site of AbdulRahman" />
        </Helmet> }
      <video className= 'videoTag' autoPlay loop muted>
        <source src={giphy} type="video/gif" />
      </video>
      <input type="text" placeholder="Type help for a list of known commands"
      value = {input}
      onChange={e=>setInput(e.target.value)}
      onKeyDown={e=>{
        if (e.key === "Enter"){
          let newOutput = "";
          newOutput = output + "\n" + "AnomalousUser$ " + input + "\n";
          switch (input) {
            case "help" :
              newOutput += "whoami [My background & focus]" + "\n" + "skills [What I'm good at and experience level]" + "\n" + "trophies [check out my accomplishments]" 
              break;
            case "whoami":
              newOutput += "I am a dynamic, highly ambitious professional who is looking to provide value by contributing thorough analysis, and deductive reasoning to demonstrate the necessity of cyber awareness in an analyst role. I possess the ability to utilize strong project and time management skills to achieve goals and meet deadlines in demanding and fast-paced work environments. I am eager to undergo further training and development to quickly learn new skills ensure immediate contribution to your team by increasing efficiency and business goals.";
              break;
            case "skills":
              newOutput += "I specialize in information security and pen testing! I enjoy honing in on vulnerabilities via various open source tools. Oh yeah... \n I code too. I built this site using react js, and I have an interpreting knowledge of pytrhon, javascript and solidity.";
              break;
            case "trophies":
              newOutput += "Recieved a scholarship from One In Tech Isaca ~2022 \n Won $10,000 prize from Worm Hole X Activate Miami ~2022 \n Placed in the top 1400s in the national cybeer league spring 2022 CTF game";
              break;
            case "reachme":
              newOutput += "Mastodon:@Hollowbyte@mastodon.social \n LinkedIn:https://www.linkedin.com/in/abdulrahman-quadri-936282192/";
          }
          setOutput(newOutput)
          setInput("")
        }
      }}
      />
      
      <div className="terminal">
        
        {output}
      </div>
    </div>
  );
}


 export default App;
