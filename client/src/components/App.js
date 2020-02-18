import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData.js";

function App() {

  
  const {
    state, links, authenticatetUser
  } = useApplicationData();


  // getPages
  // getUsers

  // const filteredLinks = links.filter(l => l.isProtected && state.user || l.isProtected === false)
  // const routes = filteredLinks.map((link, index) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        authenticatetUser()
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    )
    const routes = links.map((link, index) => {
      //const component = link.requiresAuthentication && !authenticatetUser()? <Redirect to={{ pathname: '/login'}} /> : link.component
      return link.requiresAuthentication 
      ? <PrivateRoute
        key={index}
        path={link.path}
        component={() => link.component} /> 
      : <Route
        key={index}
        path={link.path} >
        {link.component}
        </Route>
    
  })
  
 console.log(routes)

  return (
    <div>
      <h1>settle</h1>
      <Router>
        <Nav links={links} user={state.user} />
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div >
  );
}

export default App;
