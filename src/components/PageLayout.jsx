import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignIn";
import { SignOutButton } from "./SignOut";
import styles from './styles.module.css'
//import AddAchievement from "./AddAchievement";
import {Link} from 'react-router-dom';
//import  { Redirect } from 'react-router-dom'
//import {Home} from "./Home";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Hexaccolades</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            {/* <Link to="/AddAchievement"><button className={styles.button}>Add Achievement</button></Link> */}
            
            <h5><center>{isAuthenticated?<Link to="/AddAchievement"><button className={styles.button}>Add Achievement</button></Link>:'Please sign in'}</center></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};