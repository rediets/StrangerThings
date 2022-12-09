import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({token}) => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      { !token &&
        <NavLink to='/login'>Login</NavLink>
      }
      { !token &&
        <NavLink to='/register'>Register</NavLink>
      }
      { token &&
        <NavLink to='/profile'>Profile</NavLink>
      }
    </nav>
  );
};

export default Navbar;