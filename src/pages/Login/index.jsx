import React from "react";
import { connect } from "react-redux";
class Login extends React.Component {
  handleAdd = () => {
    this.props.increment(12);
  };
  handleAddAsync = () => {
    this.props.incrementAsync("async");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Login</h1>
        <p>{this.props.count}</p>
        <p onClick={this.handleAdd}>add</p>
        <p onClick={this.handleAddAsync}>async add</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    count: state.global.count,
  };
};

const mapDispatch = ({ global: { increment, incrementAsync } }) => {
  return {
    increment,
    incrementAsync,
  };
};

const LoginContainer = connect(mapState, mapDispatch)(Login);
export default LoginContainer;
