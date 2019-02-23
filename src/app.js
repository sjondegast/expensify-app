import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my ExpenseDashboardPage</div>
);

const AddExpensePage = () => <div>Add expense page</div>;

const EditExpensePage = () => (
    <div>
        This is from my edit page
    </div>
);

const HelpPage = () => (
    <div>
        This is my help page
    </div>
);

const routes = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Add Expense</Link>
        </li>
        <li>
          <Link to="/edit">Edit Expense</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById("app"));
