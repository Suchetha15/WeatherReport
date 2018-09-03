import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>Paragrah: {props.info}</p>
    </div>
);

const withAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.admin && <h2>This is admin info</h2>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.admin ? 
            (<WrappedComponent {...props}/>) :
            (<h2>Authentication failed</h2>)}
        </div>
    );
};

const AdminInfo = withAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo admin={true} info="These are info" />, document.getElementById("test"));