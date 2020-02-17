import React from "react";
import useSignUpForm from "./customHooks";
const axios = require("axios").default;

export default function SignUpForm(props) {


  const signUserUp = () => {
    const body = {
      first_name: inputs.firstName,
      last_name: inputs.lastName,
      email: inputs.email,
      password: inputs.password1,
      password_confirmation: inputs.password2
    };

    return axios({
      method: "post",
      url: "/users",
      data: body
    })
      .then(response => {
        alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
        
        console.log(response);

        props.userCreated()
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signUserUp);

  return (
    <main className="signup">
      <h2>Signup</h2>
      <section>
        <form autoComplete="off" id="create-user-form" onSubmit={handleSubmit}>
          <div>
            <input
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={inputs.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={inputs.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="password1"
              type="password"
              placeholder="Enter Password"
              value={inputs.password1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="password2"
              type="password"
              placeholder="Confirm Password"
              value={inputs.password2}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </main>
  );
}
