import React from "react";
import "../styles/Results.css";

function Results(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name.first} className="img-fluid" src={result.picture.medium} />
        </li>
      ))}
    </ul>
  );
}

export default Results;