import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignIn";
import { SignOutButton } from "./SignOut";
import styles from './styles.module.css'
import HexagonBranding from "./Branding/HexagonBranding"
//import AddAchievement from "./AddAchievement";
import {Link} from 'react-router-dom';
import SideBar from "./SideBar";
import HexaccoladesBranding from "./Branding/HexaccoladesBranding";
import profile from "./profile.jpg";
import logo from "../assests/hexlogo.png"
import { useNavigate } from "react-router-dom";
//import  { Redirect } from 'react-router-dom'
//import {Home} from "./Home";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    const navigate = useNavigate();
    const handleProfileClick=()=>{
        navigate('/Profile')
    }
    return (
        <>
            <Navbar>
                <img src={logo} className={styles.image}/><HexaccoladesBranding/>
                {/* { isAuthlenticated ? <SignOutButton /> : <SignInButton /> } */}
                <div>{isAuthenticated?<img src={profile} className={styles.profileImage} onClick={handleProfileClick}/>:<></>}</div>
            </Navbar>
            <hr className={styles.class1}/>
            {isAuthenticated?<SideBar/>:<></>}
            {/* <Link to="/AddAchievement"><button className={styles.button}>Add Achievement</button></Link> */}
            
            {/* <h5>{isAuthenticated?<Link to="/Home"></Link>:<></>}</h5> */}
            {props.children}
        </>
    );
};