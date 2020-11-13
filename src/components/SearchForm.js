import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form>
          <div className="form-group">
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for an Employee"
              id="search"
            />
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-primary mt-3"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
