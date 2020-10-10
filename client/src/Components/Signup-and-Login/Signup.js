import React, { Component } from 'react';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confermPassword: ''
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  inputChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={this.formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.inputChangeHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
            name="confermPassword"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Conferm Password"
              onChange={this.inputChangeHandler}
            />
          </div>
          <br></br>
          <br></br>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
