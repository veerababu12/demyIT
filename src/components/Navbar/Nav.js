import React from 'react';
import Logo from './logo';
import RightNav from './rightNav';

function Nav() {
  return (
    <div className='nav'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" id="navbarc">
          <Logo />
          <button style={{backgroundColor:"gray"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <RightNav />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
