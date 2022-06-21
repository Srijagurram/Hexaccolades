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
import pending from '../assests/pending_final.png'
import approved from '../assests/approve_final.png'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

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
          achievements:[]
           }
    }
      
   
    achievements(){
      let userID = 1;
      const url = "https://localhost:44355/Achievement/"+userID;

      //  var body = {
      //   userID:1,
      //  }
       let headers = new Headers();
       headers.append('Content-Type','application/json');
      //  headers.append('Accept','application/json');
      //  headers.append('Access-Control-Allow-origin',url);
      //  headers.append('Access-Control-Allow-Credentials','true');
      //  headers.append('POST','GET');
      
        fetch(url,{
           headers:headers,
           method: 'GET',
           //body:JSON.stringify()
           })
           .then(response=>{return response.json()})
           .then(res=>{this.setState({achievements:res})

           console.log(this.state.achievements)
           //sessionStorage.setItem("category",this.state.achievements.category)
           
       })
          
          
     }
     renderStatus(status,value)
     {
      return(
        <div className={styles.status}>
        <MDBCard style={{ width: '50px' }} >
            <MDBCardImage src={status} alt='...' position='top' />
          </MDBCard>
          <MDBCardBody>
          <MDBCardText>
            {value}
          </MDBCardText>
        </MDBCardBody>
        </div>
      );
     }
    componentDidMount(){
       this.achievements()
    }
    
        render() {
            return (
            <center>
            {this.state.achievements.map((achievement, myKey) =>
            <MDBCard className={styles.achievement}>
              <MDBCardBody>
                <MDBCardTitle>{achievement.category.name}</MDBCardTitle>
                <MDBCardText>
                {achievement.description}
                </MDBCardText>
                {(achievement.status==='Pending'?this.renderStatus(pending,achievement.status):this.renderStatus(approved,achievement.status))}
                <br/>
                <br/>
                <br/>
                <label className={styles.points_label}>{achievement.category.points} pts</label>
              </MDBCardBody>
            </MDBCard>
              )}

            </center>
          
    );
        }
}

export default Achievements