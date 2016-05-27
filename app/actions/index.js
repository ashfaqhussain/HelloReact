let nextFriendId = 0
export const addFriendAction = (name) => {
  return {
    type: 'ADD_FRIEND',
    id: nextFriendId++,
    name
  }
}