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
    <Route exact path = "/" component = {Home}/>
    <Route path = "/resume" component = {Resume}/>
    <Route path = "/portfolio" component = {Portfolio}/>
    <Route path = "/contacts" component = {Contacts}/>
    </>
  );
} 

export default App;

