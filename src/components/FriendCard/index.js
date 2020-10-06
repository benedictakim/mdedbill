import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.lastname} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong>District:</strong> {props.district}
          </li>
          <li>
            <strong>HB1300 Vote:</strong> {props.vote2020}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
