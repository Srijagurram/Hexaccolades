import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { PageLayout } from "./PageLayout";
import {Link} from 'react-router-dom';
import styles from './styles.module.css'
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import Achievements from './Achievements'
import Profile from "./Profile";
import LeaderBoard from "./LeaderBoard";
import { Grid} from "@material-ui/core";
import './Home.css'

const Home =()=>{
    const navigate = useNavigate();
    const handleChange=()=>{
        navigate('/AddAchievement')
    }
        return (
            <div>
                {/* <SideBar/>  */}
                <br/>
                <div>
                    <Button onClick={handleChange} className={styles.achievementButton}><label>Add an Achievement</label></Button>
                </div>
                <Profile/>
                <LeaderBoard className={styles.leaderBoard}/>
                <br/>
                
                <Achievements></Achievements>
                
                
                
                
                 {/* <ul>
                    <li>
                    <Link to="/Home">Home</Link>
                    </li>
                    <li>
                    <Link to="/AddAchievement">AddAchivement</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                </ul>  */}
            </div>
           
        );
}

export default Home;