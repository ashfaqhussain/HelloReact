const friendApp = (state, action) => {
  if (!state) {
    return {
      name: "Unknown",
      friends: ["Someone"]
    }
  }

  switch (action.type) {
    case "ADD_FRIEND": {
      const resultingFriends = {
        friends: [...state.friends, action.name]
      }
      return Object.assign({}, state, resultingFriends)
    }

    case "SET_NAME":
      return Object.assign({}, state, {
        name: action.name
      })

    default:
      return state
  }
}

export default friendApp