import {
  COMMENTS_FETCHED,
  COMMENT_CREATE_SUCCESS,
  COMMENT_DELETE_SUCCESS
} from "../actions/actions"; //

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments;
    case COMMENT_CREATE_SUCCESS:
      return [...state, action.comment];
    case COMMENT_DELETE_SUCCESS:
      return state && state.filter(comment => action.commentId !== comment.id);

    default:
      return state;
  }
};
export default reducer;
