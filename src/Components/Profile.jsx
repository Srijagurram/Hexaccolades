import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import styles from './styles.module.css'
import profile from '../assests/neutral_profile.jpg'
import medal from '../assests/medal.jpg'
import { authProvider } from '../authConfig';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardSubTitle, MDBCardTitle } from 'mdb-react-ui-kit';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            id:'',
            name:authProvider.getAccountInfo().account.name,
            designation:authProvider.getAccountInfo().account.userName,
            claimed:'200',
            redeemed:'1000',
            total:'1200',
            image:{profile}
        }
    }
    componentDidMount() {
        // Simple GET request using fetch
        // fetch('https://localhost:44355/User/'+this.state.id)
        //     .then(response => response.json())
        //     .then(data => this.setState({ name: this.state.name }));
    }

    render(){
        return(
            <MDBCard className={styles.profile}>
                <MDBCardBody>
                <div className={styles.wrapper}>
                    <div><MDBCardImage src={profile} className={styles.image}/></div>
                    <div><MDBCardImage src={medal} className={styles.image}/></div>
                </div>
                <div>
                            {/* <label>Name</label>
                            <label>{this.state.name}</label> */}
                            <MDBCardTitle className={styles.name}>{this.state.name}</MDBCardTitle>

                            {/* <label>Designation</label>
                            <label>{this.state.designation}</label> */}
                            <MDBCardSubTitle>{this.state.designation}</MDBCardSubTitle>
                </div>
                <br/>
                <br/>
                        <MDBCardBody>
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
                        </MDBCardBody>
                </MDBCardBody>
            </MDBCard> 
        )
    }
    
}

export default Profile;