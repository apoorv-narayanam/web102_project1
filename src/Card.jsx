import React from 'react';
import './card.css'
function Card(props) {
    const handleClick = () => {
        window.location.href=props.link;
        };
    return (
        <div>
        <div className="card">
        <img className="card-img-top" src={props.image} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title"></h4>
            <p className="card-text">{props.description}</p>
            <button type="button" className="btn" onClick={handleClick}>{props.topic}</button>
        </div>
        </div>
    </div>
    )
  }
  
  export default Card