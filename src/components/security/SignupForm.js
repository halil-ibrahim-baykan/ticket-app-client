import React from "react";

export default function SignUpForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Name:</label>
      <input
        type="name"
        name="name"
        placeholder="name"
        value={props.values.name}
        onChange={props.onChange}
      ></input>
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.values.password}
        onChange={props.onChange}
      ></input>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
