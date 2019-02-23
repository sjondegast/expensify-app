import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
    <Link to="/">Home</Link>
    <Link to="/create">Add Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
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
