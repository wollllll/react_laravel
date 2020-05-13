import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

function App() {
    return (
        <div className="container my-5">
            <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/users" component={User}/>
            </Router>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>home</h1>
            <Link to="/users">User</Link>
        </div>
    )
}

function User() {
    return (
        <div>
            <h1>users</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
