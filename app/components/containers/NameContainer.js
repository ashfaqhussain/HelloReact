import { connect } from 'react-redux'
import Name from '../Name'

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const NameContainer = connect(
  mapStateToProps
)(Name)

export default NameContainer