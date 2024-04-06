import React from 'react'

function RightNav() {
  return (
    <>
 <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Projects">Portofoilo</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Faq">FaQ</a>
        </li>
       
      </ul>    </>
  )
}

export default RightNav