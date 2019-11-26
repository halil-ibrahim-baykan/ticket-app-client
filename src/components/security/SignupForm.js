import React from "react";

export default function SignUpForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="name"
        name="name"
        placeholder="name"
        value={props.values.name}
        onChange={props.onChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.values.password}
        onChange={props.onChange}
      ></input>
      <button type="submit">sign up now</button>
    </form>
  );
}
