function PostComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return new state with the new comments
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE-COMMENT':
      console.log('remove comment')
      // return a new state without the delete the comment
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
      return state
    default:
      return state

  }
  return state;
}

function Comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,
      //overwrite this post with a new comment
      [action.postId]: PostComments(state[action.postId], action)
    }

  }
  return state;
}

export default Comments
