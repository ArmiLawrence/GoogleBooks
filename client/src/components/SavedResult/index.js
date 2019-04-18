import React from "react";

function SavedResult(props) {
  return (
    <span>
      <div className="col-md-4" style={{ float: "left", marginTop: "20px" }}>
        <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
        <p style={{ fontSize: "30px" }}>{props.title}</p>
        <p><strong>Author(s):</strong> {props.authors}</p>
        <p><strong>Publish Date:</strong> {props.date}</p>
        <a href={props.link} target={"_blank"} ><button className="btn btn-warning view-btn"> View</button></a>
        <br></br>
        <button onClick={props.handleDeleteClick} className="btn btn-warning delete-btn" style={{ marginBottom: "30px"}}>
          Delete
        </button>
      </div>
      <div className="col-md-8" style={{ float: "right", marginTop: "20px" }}>
        <p style={{ marginBottom: "30px"}}><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default SavedResult;