import React, { useState } from "react";

export default function Form() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");



  return (
    <main>
      <section>
      <form autoComplete="off">
        <input
        onSubmit={event => event.preventDefault()}
        name="firstName"
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={currentName => setFirstName(currentName.target.value)}
        />
      </form>
      <form autoComplete="off">
        <input
        onSubmit={event => event.preventDefault()}
        name="lastName"
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={currentName => setLastName(currentName.target.value)}
        />
      </form>
      <form autoComplete="off">
        <input
        onSubmit={event => event.preventDefault()}
        name="email"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={currentName => setEmail(currentName.target.value)}
        />
      </form>
      </section>
      <section>
        <button>
          submit
        </button>
      </section>
      
    </main>
  )
}