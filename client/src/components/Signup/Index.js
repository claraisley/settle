import React from "react";
import useSignUpForm from "./customHooks";

export default function Signup() {
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <main className="signup">
      <h2>Signup</h2>
      <section>
        <form autoComplete="off" id="create_user" onSubmit={handleSubmit}>
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
              // onSubmit={event => event.preventDefault()}
              name="email"
              type="email"
              placeholder="Enter Email"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              // onSubmit={event => event.preventDefault()}
              name="password1"
              type="password"
              placeholder="Enter Password"
              value={inputs.password1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              // onSubmit={event => event.preventDefault()}
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
