import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './profile.jpg'
import SideBar from "./SideBar";



class LeaderBoard extends Component{

render(){
    const list = [
        {
            name: "Shawn Hanna",
            score : 1550
        },
        {
            name: "Fidel Hand",
            score : 2310
        },
        {
            name: "Bessie Hickle",
            score : 1350
        },
        {
            name: "Adella Wunsch",
            score : 2100
        },
        {
            name: "Clair O'Connell",
            score : 1250
        },
        {
            name: "Kameron Prosacco",
            score : 5250
        }
    ]

    function Item(data){
        return (
            <div >
                {
                    data.map((value, index) => (
                        <li className={styles.item} key={index}>
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
        <div className={styles.board}>
        <h4 className={styles.leaderboard}>Leaderboard</h4>
                <ul className={styles.item_wrapper}>
                        {Item(list)}
                </ul>
        </div>   
        );
    }
}

export default LeaderBoard;