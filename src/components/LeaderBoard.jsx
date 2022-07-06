import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../assests/neutral_profile.jpg'
import SideBar from "./SideBar";
import { MDBCard } from "mdb-react-ui-kit";
import { getToken } from "./GetToken";



class LeaderBoard extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            list:[]
        }
    }

    leaderboard(){
        const url = "https://localhost:44355/user/Leaderboard";
        
          fetch(url,{
             headers:getToken.httpHeaders,
             method: 'GET',
             })
             .then(response=>{return response.json()})
             .then(res=>{this.setState({list:res})             
         })     
       }

       componentDidMount(){
        this.leaderboard();
       }

render(){
    //  const list = [
    //      {
    //          name: "Sravan Kumar Chalvadi",
    //          score : 3000
    //      },
    //      {
    //          name: "Nagapurnika Mallem",
    //          score : 3000
    //      },
    //      {
    //          name: "Renuka Sravya Tenneti",
    //          score : 2000
    //      },
    //      {
    //          name: "Bhavani Dandu",
    //          score : 1000
    //      },
    //      {
    //          name: "Sudeepa Gorle",
    //          score : 1000
    //      },
    //      {
    //          name: "Rishab Kulkarni",
    //          score : 1000
    //      },
    //      {
    //         name: "Manojkumar Kallagunta",
    //         score : 400
    //     },
    //      {
    //          name: "Viksit Agarwal",
    //          score : 200
    //      },
    //      {
    //          name: "Madineni Sharath K",
    //          score : 200
    //      },
    //      {
    //          name: "Lakshmi Sowmya Koppuravuri",
    //          score : 200
    //      },

    //  ]

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
                                {console.log(value.total)}
                                <span className={styles.item__score}>{value.total}</span>
                                </li>
                        )
                    )
                }
            </div>
    
            
        )
    }
    return ( 
        <center>
        <MDBCard className={styles.board}>
        <h4 className={styles.leaderboard}>Leaderboard</h4>
                <ul className={styles.item_wrapper}>
                        {Item(this.state.list)}
                </ul>
        </MDBCard>   
            </center>
        );
    }
}

export default LeaderBoard;