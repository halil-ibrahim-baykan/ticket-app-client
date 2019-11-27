import React from "react";

export default function CreateComment(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>Comment:</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={props.values.comment}
          onChange={props.onChange}
        />
        <button type="submit" name="button">
          Add Comment
        </button>
      </form>
    </div>
  );
}
