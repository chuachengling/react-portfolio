import React from "react"
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"
import Portfolio from "./components/Portfolio"

// When you are running, do export HOST="localhost"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path = "/react-portfolio/" component = {Home}/>
    <Route path = "/react-portfolio/resume" component = {Resume}/>
    <Route path = "/react-portfolio/portfolio" component = {Portfolio}/>
    <Route path = "/react-portfolio/contacts" component = {Contacts}/>
    </>
  );
} 

export default App;

