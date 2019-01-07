import axios from 'axios'

const index = (state, action) => {

  switch (action.type) {
    case 'LOAD':
    
      return [
      axios.get('https://randomuser.me/api/?results=200&nat=us')
      .then(json => json.data.results.map(result => (
        {
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        })))
      .then(newData => (
         {
          users:newData ,
          filteredUsers: newData ,
          query : ''
        }))
      ]

    case 'NEW_QUERY':
       return [
         ...state,
         {
           filteredUsers: state.users.filter(item => item.name.toLowerCase().includes(action.query.toLowerCase())),
           query: action.query
         }
       ]
    default:
      return state
  }
}

export default index
