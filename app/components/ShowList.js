import React from 'react'

const ShowList = ({ friends }) => (
  <div className="panel panel-info">
    <div className="panel-heading">
      <h3 className="panel-title">Friends</h3>
    </div>
    <div className="panel-body">
      <ul>
        {friends.map(friend =>
          <li><span className="glyphicon glyphicon-user"></span> {friend}</li>
        )}
      </ul>
    </div>
  </div>
)

ShowList.propTypes = {
  friends: React.PropTypes.array.isRequired
}

export default ShowList