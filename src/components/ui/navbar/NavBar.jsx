import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <nav className="navbar navbar-light bg-light">
      <Link class="active" to="/"><i class="fa fa-fw fa-home"></i> Home
      </Link>
    </nav>
  )
}

export default NavBar