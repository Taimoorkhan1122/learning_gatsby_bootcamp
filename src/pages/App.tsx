import React from 'react'
import {Router, Link} from '@reach/router'

import Layout from "../components/layout";
import Login from "../components/Login";
import Register from "../components/Register";

import './app.css'
const App = () => {
    
    return (
        <Layout>
            <Link to="app/login">Login</Link> <br />
            <Link to="app/register">Register</Link>
            <h2>App.tsx page</h2> <br />
            <Router basepath="/app">
                <Login path="/login"/>
                <Register path="/register"/>
            </Router>
        </Layout>
    )
}

export default App
