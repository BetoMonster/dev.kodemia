import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home/";
import Challenge from "./screens/Challenge/";
import Login from "./screens/Login/";
import Exercises from "./screens/Exercises/";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/challenge">
              <Challenge />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/exercises" component={Exercises}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

/*function App() {
  return (
    <div>
       Hello WORD!
    </div>
  );
}*/

export default App;
