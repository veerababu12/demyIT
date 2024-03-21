import React from 'react';
import Logo from './logo';
import RightNav from './rightNav';

function Nav() {
  return (
    <>
      
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <Logo/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     <RightNav/>
    </div>
  </div>
</nav>


     
    </>
  );
}

export default Nav;
