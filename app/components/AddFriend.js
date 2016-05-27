import React from 'react'
import { connect } from 'react-redux'
import { addFriendAction } from '../actions'

let AddFriend = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addFriendAction(input.value))
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }} />
      { " " }
      <button type="submit" className="btn btn-primary">Add Friend</button>
    </form>
  )
}
AddFriend = connect()(AddFriend)

export default AddFriend