import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableHeader from "./TableHeader";
import Results from "./Results";
import API from "../utils/API";

class Main extends Component {
  state = {
    search: "",
    results: [],
    newResults: []
  };

  // When this component mounts, search the Random User API for employees
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
    API.search(query)
        // .then(res => console.log(res.data.results))
      .then(res => this.setState({ results: res.data.results, newResults: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    let directory = this.state.results;
    console.log(directory)
    let searched = String(this.state.search.trim().toLowerCase());
    console.log(searched)
    let newList = directory.filter((employee) => {
        let firstName = employee.name.first.toLowerCase();
        return firstName === searched;
    })
    this.setState({
        newResults: newList
    })
  };

  // When the arrow is clicked, alphabetize the names
  handleSort = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <TableHeader handleSort={this.handleSort}/>
        <Results results={this.state.newResults} />
      </div>
    );
  }
}

export default Main;
