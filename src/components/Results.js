import React from "react";

function formatDate(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const dayArray = dateArray[2].split("T");
  const day = dayArray[0];
  const formattedDate = [month, day, year].join("-");
  return formattedDate;
}

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
              <p>{formatDate(result.dob.date)}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Results;
