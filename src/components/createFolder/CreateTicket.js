import React from "react";

export default function CreateEvent(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={props.values.name}
          onChange={props.onChange}
        />
        <label>Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />
        <label>Price:</label>
        <input
          id="price"
          type="ntext"
          name="price"
          value={props.values.price}
          onChange={props.onChange}
        />

        <button type="submit" name="button">
          Create Ticket
        </button>
      </form>
    </div>
  );
}
