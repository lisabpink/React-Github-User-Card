import React from "react";
import "./App.css";
// import axios from "axios";
// import UserCard from "./components/UserCard";
import User from "./components/User";
import Followers from "./components/Followers";



// 
function App() {
  return(
<div class="header">
       
      
    <div className="App">

     <h1>GitHub User Card</h1>
          <User  />
          <Followers />

          </div>
    </div>
  );
  
}

export default App;
