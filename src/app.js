import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my ExpenseDashboardPage</div>
);

const AddExpensePage = () => <div>Add expense page</div>;

const EditExpensePage = () => <div>This is from my edit page</div>;

const HelpPage = () => <div>This is my help page</div>;

const NoMatch = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="selected">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="selected">Add Expense</NavLink>
    <NavLink to="/edit" activeClassName="selected">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="selected">Help</NavLink>
  </header>
);

const routes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById("app"));
