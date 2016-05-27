import { connect } from 'react-redux'
import ShowList from '../ShowList'

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const ShowListContainer = connect(
  mapStateToProps
)(ShowList)

export default ShowListContainer