import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" exact activeClassName="selected">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="selected">Add Expense</NavLink>
      <NavLink to="/edit" activeClassName="selected">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="selected">Help</NavLink>
    </header>
  );

  export default Header;