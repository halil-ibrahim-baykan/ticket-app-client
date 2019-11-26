import React from "react";

export default function CreateEvent(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Url:</label>
        <input
          id="url"
          type="text"
          name="url"
          value={props.values.url}
          onChange={props.onChange}
        />
        <br />
        <label>Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={props.values.name}
          onChange={props.onChange}
        />
        <br />

        <label>Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />
        <br />

        <label>Start Date:</label>
        <input
          id="sDate"
          type="text"
          name="startDate"
          value={props.values.startDate}
          onChange={props.onChange}
        />

        <br />
        <label>End Date:</label>
        <input
          id="eDate"
          type="text"
          name="endDate"
          value={props.values.endDate}
          onChange={props.onChange}
        />
        <br />

        <button type="submit" name="button">
          save
        </button>
      </form>
    </div>
  );
}
