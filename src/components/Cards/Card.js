import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  const { icon, title, description } = props;

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="item">
        <span className="icon" style={{color:"green"}}>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
