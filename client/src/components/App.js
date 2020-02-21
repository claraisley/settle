import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import useApplicationData from "../hooks/useApplicationData.js";

function App() {
  const { state, links, authenticatetUser, setUser } = useApplicationData();

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticatetUser() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  const routes = links.map((link, index) => {
    return link.requiresAuthentication ? (
      <PrivateRoute
        key={index}
        path={link.path}
        component={() => link.component}
      />
    ) : (
      <Route key={index} path={link.path}>
        {link.component}
      </Route>
    );
  });

  return (
    <div className="header">
      <Router>
        <Nav links={links} user={state.user} setUser={setUser} />
        <Switch>{routes}</Switch>
      </Router>

      <div className="body-wrapper"></div>
    </div>
  );
}

export default App;
