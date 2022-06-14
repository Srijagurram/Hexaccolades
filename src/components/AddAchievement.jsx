import React, { Component } from "react";
//import { PageLayout } from "./PageLayout";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './styles.module.css'
//import { MultilineInput } from 'react-input-multiline';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Button from "react-bootstrap/Button";
import { MultilineInput } from "react-input-multiline";
//import Select from 'react-select';
import Select from "react-dropdown-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";
//import swal from 'sweetalert'

class AddAchievement extends Component{
  constructor(props){
    super(props);

  this.state = {
      description: '',
      category:'',
      proof:'',
      completedOn:'',
      owner:1
    };

    this.handleDescriptionChange=this.handleDescriptionChange.bind(this)
    this.handleCategoryChange=this.handleCategoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    
  handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
      };
  handleCategoryChange=(e)=>{
    //console.log(e.target.value)
        this.setState({ category: e.target.value },()=>{});
        //sessionStorage.setItem("category",this.state.category);
        //console.log(this.state.category)
    };

      handleSubmit=(e)=>{
        console.log(this.state)
         var body = {
            userId:this.state.owner,
            proof:this.state.proof,
            description : this.state.description,
            category: this.state.category,
            completedOn:this.state.completedOn,
        }
    
        console.log(body);
            if(this.state.category==""){
              alert('Please select Type')
            }
        // else if(this.state.proof==""){
        //     alert('Please add supporting document')
        // }
        else if(this.state.description==""){
        alert('Please enter the description')
        }
        
        else{
        
    
      const url = "https://localhost:44355/Achievement";
        let headers = new Headers();
     
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
     
        headers.append('Access-Control-Allow-Origin',url);
        headers.append('Access-Control-Allow-Credentials','true');
     
        headers.append('POST','GET');
     
        fetch(url, {
           headers:{headers},
           method: 'POST',
           body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(contents => {console.log(contents);
        sessionStorage.setItem("owner",this.state.owner);
        sessionStorage.setItem("description",this.state.description);
        sessionStorage.setItem("proof",this.state.proof);
        sessionStorage.setItem("category",this.state.category);
        sessionStorage.setItem("completedOn",this.state.completedOn);      
                          
     })
     .catch(()=> console.log("can't access " + url + " response. "))
    
    
     alert('Achievement added successfully!');
     //swal("Good job!",'Item uploaded',"success");
     //window.history.go('./Home')
     
      }
      };

      handleCancel=(e)=>{
        window.history.back();
      };

    render(){
      
        const uploader = new Uploader({
            // Get production API keys from Upload.io
            apiKey: "free"
          });

          const options=['Udemy Certification','External Certification','POCs/Next is NOW','New Ideas presented to CTO','AoC Top 25 people','Hexperts Blog as Author','Hexperts answer a query','Knowledge sharing session','Focus group','TechLock','Participating in conference as a speaker','Winning a hackathon','Participating in a hackathon']
        // const options=[
        //     {
        //         label: 'Udemy Certification',
        //         value: 1,
        //      },
        //      {
        //        label: 'External Certification',
        //         value: 2,
          
        //      },
        //      {
        //        label: 'POCs/Next is NOW',
        //         value: 3,
        //      },
        //      {
        //        label: 'New Ideas presented to CTO',
        //         value: 4,
        //      },
        //      {
        //        label: 'AoC Top 25 people',
        //         value: 5,
        //      },
        //      {
        //        label: 'Hexperts Blog as Author',
        //         value: 6,
        //      },
        //      {
        //        label: 'Hexperts answer a query',
        //         value: 7,
        //      },
        //      {
        //        label: 'Knowledge sharing session',
        //         value: 8,
        //      },
        //      {
        //        label: 'Focus group',
        //         value: 9,
        //      },
        //      {
        //        label: 'TechLock',
        //         value: 10,
        //      },
        //      {
        //        label: 'Participating in conference as a speaker',
        //         value: 11,
        //      },
        //      {
        //        label: 'Winning a hackathon',
        //         value: 12,
        //      },
        //      {
        //         label: 'Participating in a hackathon',
        //         value: 13,
        //      },
        //   ];
        return (
          <div>
            {/* <SideBar/> */}
            <form className={styles.card}>
                Add a new Achievement
                <hr/>
                <br></br>
                <label>Type</label>
                <div className={styles.dropdown}>
                  {/* <Select
                     options={options}  
                     onSelect={this._onSelect}
                     onChange={this.handleCategoryChange}
                     value = {this.state.category}
                     placeholder="Select an option" /> */}
                     <select onChange={this.handleCategoryChange} className={styles.dropdown} >
                        {options.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                        </select>
                </div>
                <div>
                    <label>Description</label><br/>
                    <textarea
                            name='description'
                            onChange={this.handleDescriptionChange} 
                            value={this.state.description}
                            className={styles.description}/>
                </div>
                <label>Document</label>
                <br/>
                <UploadButton 
                    uploader={uploader} 
                    options={{multi: false}} 
                    value={this.state.proof}
                    onComplete={files => {console.log(files)}}>{({onClick}) =><button onClick={onClick} className={styles.fileUpload}>Upload supporting document...</button>}
                </UploadButton>
                <br/>
                <br/>
                <div className={styles.buttonWrapper}>
                <Button variant="primary" className={styles.button} onClick={() => this.handleSubmit()} align='right'>Submit</Button>
                <Button variant="primary" className={styles.button} onClick={() => this.handleCancel()} align='right'>Cancel</Button>
                </div>
            </form>
          </div>
        );
    }
}

export default AddAchievement;