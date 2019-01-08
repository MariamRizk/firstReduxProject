import axios from "axios";
const initialState = {
  users: [],
  filteredUsers:[],
  query:""
};
const index = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      return (
        axios
          .get("https://randomuser.me/api/?results=200&nat=us")
          .then(json =>
            json.data.results.map(result => ({
              name: `${result.name.first} ${result.name.last}`,
              id: result.registered
            }))
          )
          .then(newData => ({
            users: newData,
            filteredUsers: newData,
            query: ""
          }))
      );

    case "NEW_QUERY":
    if (state.users){
      return (
        {
          users: state.users,
          filteredUsers: state.users.filter(item =>
            item.name.toLowerCase().includes(action.query.toLowerCase())
          ),
          query: action.query
        }
      );
    } else return state;
    default:
      return state;
  }
};

export default index;
