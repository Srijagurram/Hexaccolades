import { logRoles } from "@testing-library/react";
import React, { Component } from "react";
import styles from './styles.module.css'
import SideBar from "./SideBar";
//import { Container } from "react-bootstrap";
//import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
//import UserProfile from "./UserProfile";
//<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
//import swal from 'sweetalert'
const admin = {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%', 
}

const table = {
    top:'20%',
    left:'40%'
}
      
class Achievements extends React.Component {

    constructor(props) {
        super(props);
         this.state={
           achievements:[{
            "id": 3,
            "category": {
              "categoryId": 1,
              "name": "Udemy",
              "points": 200
            },
            "user": {
              "usersId": 1,
              "name": "Akshay Kumar",
              "email": "akshay.kumar.1@hexagon.com",
              "managerId": 2,
              "isManager": "False",
              "redeemed": 0,
              "claimed": 2200,
              "total": 2200
            },
            "status": "Approved",
            "proof": "https://udemy-certificate.s3.amazonaws.com/image/UC-9f515558-1e29-409b-829a-be57215c5171.jpg?v=1633364328000",
            "completedOn": "2021-10-04T00:00:00",
            "description": "Agile fundamental course"
          },
          {
            "id": 4,
            "category": {
              "categoryId": 2,
              "name": "External Certification",
              "points": 2000
            },
            "user": {
              "usersId": 1,
              "name": "Akshay Kumar",
              "email": "akshay.kumar.1@hexagon.com",
              "managerId": 2,
              "isManager": "False",
              "redeemed": 0,
              "claimed": 2200,
              "total": 2200
            },
            "status": "Approved",
            "proof": "someurl",
            "completedOn": "2021-12-07T00:00:00",
            "description": "PoC on porting heavy computation to cloud"
          },
          {
            "id": 1002,
            "category": {
              "categoryId": 5,
              "name": "Advent of Code",
              "points": 25000
            },
            "user": {
              "usersId": 1,
              "name": "Akshay Kumar",
              "email": "akshay.kumar.1@hexagon.com",
              "managerId": 2,
              "isManager": "False",
              "redeemed": 0,
              "claimed": 2200,
              "total": 2200
            },
            "status": "Pending",
            "proof": "https://udemy-certificate.s3.amazonaws.com/image/UC-9f515558-1e29-409b-829a-be57215c5171.jpg?v=1633364328000",
            "completedOn": "2022-06-07T00:00:00",
            "description": "Completed"
          },
          {
            "id": 2002,
            "category": {
              "categoryId": 1,
              "name": "Udemy",
              "points": 200
            },
            "user": {
              "usersId": 1,
              "name": "Akshay Kumar",
              "email": "akshay.kumar.1@hexagon.com",
              "managerId": 2,
              "isManager": "False",
              "redeemed": 0,
              "claimed": 2200,
              "total": 2200
            },
            "status": "Pending",
            "proof": "https://udemy-certificate.s3.amazonaws.com/image/UC-9f515558-1e29-409b-829a-be57215c5171.jpg?v=1633364328000",
            "completedOn": "2022-06-09T00:00:00",
            "description": "Completed"
          }],
           }
    }
      
    renderResultRows(){
      
        let s=this.state.achievements
        let n
        // sessionStorage.setItem("status",s.status);
        // sessionStorage.setItem("category",s.category.name);
        // sessionStorage.setItem("description",s.description);
        // sessionStorage.setItem("points",s.category.points);
       
        return s.map((achievement) => {
          <tr id={achievement.id}> 
                   <td >{achievement.category.name}</td>
                   <td >{achievement.description}</td>
                   <td >{achievement.category.points}</td>
                   <td>{achievement.status}</td>
          </tr>
       });  
    
      
    }

  //   componentDidMount() {
  //     // Simple GET request using fetch
  //     fetch('https://localhost:44355/Achivement/'+this.state.achievements.user.usersId)
  //         .then(response => response.json())
  //         .then(data => this.setState({ achievements: data }));
  //         console.log(this.state.achievements);
  // }

    // items(){
    //   const url = "https://localhost:44355/Achievement";

    //   var body = {
    //     owner:sessionStorage.getItem("userID"),
    //   }
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   headers.append('Accept','application/json');

    //   headers.append('Access-Control-Allow-origin',url);
    //   headers.append('Access-Control-Allow-Credentials','true');

    //   headers.append('POST','GET');
      
    //    fetch(url,{
    //       headers:headers,
    //       method: 'POST',
    //       body:JSON.stringify(body)
    //       })
    //       .then(response=>{console.log(response.json)              
    //           return response.json()
    //       }).then(res=>{this.setState({achievements:res})
    //   })
          
          
    // }
        // componentDidMount(){
        //   this.achievements()
        // }
    
        render() {
        
          var data = this.state.achievements;
            return (
            <div>
                {/* <SideBar/> */}
                  <div className="admin">
                      
                      <div className={styles.achievement}>
                        <table className="w3-table-all">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </tr>
                          </thead>
                        <tbody> {this.renderResultRows()}</tbody>
                        {/* <tbody>
                        {this.state.achievements.map((achievement) => 
                              <tr id={achievement.id} class="tr"> 
                                      <td >{achievement.category}</td>
                                      <td >{achievement.description}</td>
                                      <td >{achievement.points}</td>
                                      <td>{achievement.user.status}</td>
                              </tr>
                        )}
                        </tbody> */}
                        </table>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
            </div>
    );
        }
}

export default Achievements