import React from 'react'

const Name = ({ name }) => (
    <h3>Name: {name}</h3>
)

Name.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Name