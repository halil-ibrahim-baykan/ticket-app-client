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
        placeholder="name"
      />
            <label>Name:</label>

      <input
        type="text"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
