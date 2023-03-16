import React from 'react';

function Card(props) {
  return (
    <div className="card">triangle block workouts
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Card;