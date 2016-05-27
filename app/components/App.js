import React from 'react'
import NameContainer from './containers/NameContainer'
import ShowListContainer from './containers/ShowListContainer'
import AddFriend from './AddFriend'

const App = () => (
  <div>
    <NameContainer/>
    <AddFriend />
    <ShowListContainer />
  </div>
)

export default App