import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  const { icon, title, description, link } = props;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <a href={link} style={{textDecoration:"none",color: "#333"}} className='card-link'>
        <div className="item">
          <span className="icon" style={{color:"green"}}>
            <FontAwesomeIcon icon={icon} />
          </span>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
