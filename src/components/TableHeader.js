import React from "react";
import "../styles/TableHeader.css";

function TableHeader(props) {
  return (
          <div className="row">
            <div className="col sm-2">
              <h5>Image</h5>
            </div>
            <div className="col sm-2">
              <h5>Name</h5><span onChange={props.handleSort} className="pointer">🔻</span>
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