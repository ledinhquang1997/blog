import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Feeds from "./pages/Feeds/Feeds";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {

  return (
    <div className="App">
       <Router>
      <Header/>
      <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/" exact>
            <Feeds />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
