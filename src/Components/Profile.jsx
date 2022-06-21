import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import styles from './styles.module.css'
import profile from './profile.jpg'
import medal from '../assests/medal.jpg'
import { authProvider } from '../authConfig';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            id:'',
            name:authProvider.getAccountInfo().account.name,
            designation:'Software Developer',
            claimed:'200',
            redeemed:'1000',
            total:'1200',
            image:{profile}
        }
    }
    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://localhost:44355/User/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({ name: this.state.name }));
    }

    render(){
        return(
            <div className={styles.profile}>
                <div className={styles.wrapper}>
                    <div><img src={profile} className={styles.image}/></div>
                    <div><img src={medal} className={styles.image}/></div>
                </div>
                        <div>
                            {/* <label>Name</label>
                            <label>{this.state.name}</label> */}
                            <label className={styles.name}>{this.state.name}</label>
                            <br/>
                            {/* <label>Designation</label>
                            <label>{this.state.designation}</label> */}
                            <span>{this.state.designation}</span>
                        </div>
                        <br/>
                        <br/>
                            <div className={styles.points}>
                                {/* <label>Claimed Points</label>
                                <label>{this.state.claimed}</label> */}
                                Claimed Points<span className={styles.item__score}><h1>{this.state.claimed}</h1></span>
                            </div>
                            <div className={styles.points}>
                                {/* <label>Redeemed Points</label>
                                <label>{this.state.redeemed}</label> */}
                                Redeemed Points<span className={styles.item__score}><h1>{this.state.redeemed}</h1></span>
                            </div>
                            <div className={styles.points}>
                                {/* <label>Total Points</label>
                                <label>{this.state.total}</label> */}
                                Total Points<span className={styles.item__score}><h1>{this.state.total}</h1></span>
                            </div>
                    </div> 
        )
    }
    
}

export default Profile;