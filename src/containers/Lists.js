import { connect } from 'react-redux'
import List from '../components/List.js'

const mapStateToProps = state => ({
  usernames: state.filteredUsers
})

export default connect(mapStateToProps)(List)
