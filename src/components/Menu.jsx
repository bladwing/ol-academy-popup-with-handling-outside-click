import React from "react";
import "./style.sass"
import PopUp from "./PopUp";


import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="nav">
          <button>
            <NavLink className="button" to="/">მთავარი გვერდი</NavLink>
          </button>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="homePage">
      <PopUp/>
   
    </div>
  );
}
