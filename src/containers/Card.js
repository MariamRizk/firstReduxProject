import { connect } from "react-redux";
import React, { Component } from "react";
import "../App.css";
import "../main.css";
import SearchBar from "./SearchBar.js";
import Lists from "./Lists.js";
import { onLoad } from "../actions";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    // var {users} = this.state.users
    return (
      <div className="Card">
        <div className="header">Looking for an alter ego?</div>
        <SearchBar />
        <Lists />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(onLoad())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
