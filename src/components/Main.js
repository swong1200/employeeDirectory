import React, { Component } from "react";
import SearchForm from "./SearchForm";
import TableHeader from "./TableHeader";
import Results from "./Results";
import API from "../utils/API";

class Main extends Component {
  state = {
    search: "",
    results: [],
    newResults: [],
    order: "descend",
  };

  // When this component mounts, search the Random User API for employees
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (query) => {
    API.search(query)
      // .then(res => console.log(res.data.results))
      .then((res) =>
        this.setState({
          results: res.data.results,
          newResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        let directory = this.state.results;
        // console.log(directory)
        let searched = this.state.search.trim().toLowerCase();
        // console.log(searched)
        if (searched === "") {
          this.setState({
            newResults: this.state.results,
          });
        } else {
          let newList = directory.filter((employee) => {
            let firstName = employee.name.first.toLowerCase();
            let lastName = employee.name.last.toLowerCase();
            return firstName === searched || lastName === searched;
          });
          this.setState({
            newResults: newList,
          });
        }
      }
    );
  };

  // When the button is clicked, alphabetize the names
  handleSort = (event) => {
    event.preventDefault();
    console.log(event);
    let directory = this.state.results;
    if (this.state.order === "descend") {
      let sortedList = directory.sort((a, b) => {
        if (a.name.last < b.name.last) return -1;
      });
      this.setState({
        newResults: sortedList,
        order: "ascend",
      });
    } else if (this.state.order === "ascend") {
      let sortedList = directory.sort((a, b) => {
        if (a.name.last > b.name.last) return -1;
      });
      this.setState({
        newResults: sortedList,
        order: "descend",
      });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSort={this.handleSort}
        />
        <TableHeader />
        <Results results={this.state.newResults} />
      </div>
    );
  }
}

export default Main;
