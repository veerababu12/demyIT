import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Counter({ icon, count, title }) {
    return (
      <div>
        <FontAwesomeIcon icon={icon} className="fa-4x" />
        <div className="counter">{count}+</div>
        <h3>{title}</h3>
      </div>
    );
  }
  
export default Counter;