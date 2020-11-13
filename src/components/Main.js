import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableHeader from "./TableHeader";
import Results from "./Results";
import API from "../utils/API";

class Main extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random User API for employees
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
    API.search(query)
        // .then(res => console.log(res.data.results))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.results);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <TableHeader />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Main;
