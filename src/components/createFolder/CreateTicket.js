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
        {/* <label>Author:</label>
        <input
          id="name"
          type="text"
          name="author"
          value={props.values.author}
          onChange={props.onChange}
        /> */}
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
          type="text"
          name="price"
          value={props.values.price}
          onChange={props.onChange}
        />
  
        <button type="submit" name="button">
          save
        </button>
      </form>
    </div>
  );
}
