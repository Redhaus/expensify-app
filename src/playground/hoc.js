// HIGHER ORDER COMPONENT (HOC) 
// a component that renders another ordinary component
// BENEFITS
// reuse code
// render hijacking
// prop manupulation
// abstrat state

import React from 'react';
import ReactDOM from 'react-dom';

// Standard Component
const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>This info is: {props.info}</p>
    </div>
);

// Create a function that accepts component param and returns modified component
// Pass in props with spread operator 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info: Don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <div><h3>Hi {props.info}</h3> <WrappedComponent {...props}/> </div>: <p>Please login </p>}
        </div>
    )
}

// Assign return function value to const
const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info);




// Render and pass in props as needed
// ReactDOM.render( <AdminInfo isAdmin={false} info="Benjamin"/>, document.getElementById('app'));
ReactDOM.render( <AuthInfo isAuthenticated={true} info="Benjamin"/>, document.getElementById('app'));
