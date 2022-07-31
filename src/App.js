import React from "react";
import SignUp from "./components/SignUp"
import SignupForm from "./components/Login"
import Student from "./components/Student"
import Mentors from "./components/Mentors"
import Home from "./components/Home"
import ComposeResearchPaper from "./components/ComposeResearchPaper"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignupAsStudent from "./components/SignUpAsStudent";
import SignupAsMentor from "./components/SignUpAsMentor";
import Papers from "./components/Papers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
   
   <Router>
            <Switch>
                <Route exact path='/'>
                    <SignUp/>
                </Route>
                <Route exact path="/Login">
                  <SignupForm/>
                </Route>
                <Route exact path="/ComposeResearchPaper/:name">
                  <ComposeResearchPaper/>
                </Route>
                <Route exact path="/home/:name">
                  <Home/>
                </Route>
                <Route exact path="/Mentors/:name">
                  <Mentors />
                </Route>
                <Route exact path="/navbar">
                  <Navbar/>
                </Route>
                <Route exact path="/signUpasStudent">
                  <SignupAsStudent />
                </Route>
                <Route exact path="/signUpasMentor">
                  <SignupAsMentor />
                </Route>
                <Route exact path="/Papers/:name">
                  <Papers />
                </Route>
            </Switch>
        </Router>
    
    </>
  );
}


export default App;

