
import './App.css';

import Register from "./auth/Registration";
import Login from "./auth/Login";
import Home from "./Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
