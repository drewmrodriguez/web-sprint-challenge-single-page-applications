import React from "react";
import "./App.css";
import FormInputs from "./components/Form"
import HomePage from "./components/Home";
import {BrowserRouter as Router, Route,} from "react-router-dom"
import Navbar from "./components/Navbar";



const App = () => {
  
  return (
    <Router>
      <Navbar />
    <Route path="/" exact component={HomePage} />
    <Route path="/Form" exact component={FormInputs} />
    </Router>
    
  )
};
  
export default App;