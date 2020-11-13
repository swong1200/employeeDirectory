import React from "react";
import "../styles/Results.css";

function Results(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <div className="row">
            <div className="col sm-2">
              <img
                alt={result.name.first}
                className="img-fluid"
                src={result.picture.medium}
              />
            </div>
            <div className="col sm-2">
              <p>{result.name.first + " " + result.name.last}</p>
            </div>
            <div className="col sm-2">
              <p>{result.phone}</p>
            </div>
            <div className="col sm-2">
              <p>{result.email}</p>
            </div>
            <div className="col sm-2">
              <p>{result.dob.date}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Results;
