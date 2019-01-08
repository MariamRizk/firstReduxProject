import { connect } from 'react-redux'
import { onQueryChange } from '../actions/index.js'
import Search from '../components/Search'

const mapDispatchToProps = dispatch => ({
  updateList: query => dispatch(onQueryChange(query))
})

export default connect(null,mapDispatchToProps)(Search)
