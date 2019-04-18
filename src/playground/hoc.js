// higher order components - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>The info is : {props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private into. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{/* {props.isAuthenticated && <WrappedComponent {...props}/>} */}
			{/* {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Login Please...</p>} */}
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Please Login...</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('root'));
ReactDOM.render(
	<AuthInfo isAuthenticated={true} info='There are details' />,
	document.getElementById('root')
);
