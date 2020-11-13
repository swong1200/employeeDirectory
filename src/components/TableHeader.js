import React from "react";
import "../styles/TableHeader.css";

function TableHeader() {
  return (
          <div className="row">
            <div className="col sm-2">
              <h5>Image</h5>
            </div>
            <div className="col sm-2">
              <h5>Name</h5>
            </div>
            <div className="col sm-2">
              <h5>Phone Number</h5>
            </div>
            <div className="col sm-2">
              <h5>Email</h5>
            </div>
            <div className="col sm-2">
              <h5>DOB</h5>
            </div>
          </div>
  );
}

export default TableHeader;