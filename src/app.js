import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

// addExpense
store.dispatch(
	addExpense({ description: 'Water bill', amount: 600, createdAt: 4500 })
);
store.dispatch(
	addExpense({ description: 'Gas bill', amount: 1200, createdAt: 1000 })
);
store.dispatch(
	addExpense({ description: 'Rent', amount: 1059, createdAt: 109500 })
);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
