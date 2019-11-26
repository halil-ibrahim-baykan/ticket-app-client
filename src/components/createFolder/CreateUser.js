import React from "react";

export default function CreateForm(props) {
  const { onSubmit, onChange, values } = props;
  const { name, password } = values;

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
