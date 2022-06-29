import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../assests/neutral_profile.jpg'
import SideBar from "./SideBar";
import { MDBCard } from "mdb-react-ui-kit";



class LeaderBoard extends Component{

render(){
    const list = [
        {
            name: "Sravan Kumar Chalvadi",
            score : 3000
        },
        {
            name: "Nagapurnika Mallem",
            score : 3000
        },
        {
            name: "Renuka Sravya Tenneti",
            score : 2000
        },
        {
            name: "Bhavani Dandu",
            score : 1000
        },
        {
            name: "Sudeepa Gorle",
            score : 1000
        },
        {
            name: "Rishab Kulkarni",
            score : 1000
        },
        {
            name: "Viksit Agarwal",
            score : 200
        },
        {
            name: "Madineni Sharath K",
            score : 200
        },
        {
            name: "Manojkumar Kallagunta",
            score : 200
        },
        {
            name: "Sowmya Koppuravuri",
            score : 200
        },

    ]

    function Item(data){
        return (
            <div >
                {
                    data.map((value, index) => (
                        <li className={styles.item} key={index}>
                        <span className={styles.item__rank}>{String(index+1).padStart(2, '0')}</span>
                         <div className={styles.item__avatar}>
                                <img
                                    className={styles.item__avatar__img}
                                    src={pic}
                                />
                            </div>
                                <span className={styles.item__name}>{value.name}</span>
                                <span className={styles.item__score}>{value.score}</span>
                                </li>
                        )
                    )
                }
            </div>
    
            
        )
    }
    return ( 
        <MDBCard className={styles.board}>
        <h4 className={styles.leaderboard}>Leaderboard</h4>
                <ul className={styles.item_wrapper}>
                        {Item(list)}
                </ul>
        </MDBCard>   
        );
    }
}

export default LeaderBoard;