import React from "react";
import useLoginForm from "../hooks/useLoginForm";
import { useHistory } from "react-router-dom";
const axios = require("axios").default;

export default function Login(props) {
  
  let history = useHistory();
  
  const login = () => {
    const body = {
      email: inputs.email,
      password: inputs.password,
    };
    
    return axios({
      method: "post",
      url: "/auth/login",
      data: body,
      withCredentials: true
    })
      .then(response => {
        alert(`User Logged In!
           Email: ${inputs.email}`);
        
        console.log(response);
        props.setUser({email: response.data.email, name: response.data.name, id: response.data.id })
        localStorage.setItem('currentUser', JSON.stringify(response));
        history.push("/menu");
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const { inputs, handleInputChange, handleSubmit } = useLoginForm(login);

  return (
    <main className="login">
      <h2>Login</h2>
      <section>
        <form onSubmit={handleSubmit}>
        <div>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={inputs.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={inputs.password || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  )
}