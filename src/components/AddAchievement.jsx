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

class AddAchievement extends Component{
    state = {
        description: '',
        category:'',
        document:''
      };
      handleChange = (e) => {
        this.setState({ description: e.target.value });
      };

      handleSubmit=(e)=>{
        alert(this.state.description,this.state.category,this.state.document)
      }

      handleCancel=(e)=>{
          
      }

      handleOnChangeDropDown=(e)=>{
          this.setState({category:e.target.value});
      }
    render(){
        const uploader = new Uploader({
            // Get production API keys from Upload.io
            apiKey: "free"
          });

        const options=[
            {
                label: 'Udemy Certification',
                value: 1,
             },
             {
               label: 'External Certification',
                value: 2,
          
             },
             {
               label: 'POCs/Next is NOW',
                value: 3,
             },
             {
               label: 'New Ideas presented to CTO',
                value: 4,
             },
             {
               label: 'AoC Top 25 people',
                value: 5,
             },
             {
               label: 'Hexperts Blog as Author',
                value: 6,
             },
             {
               label: 'Hexperts answer a query',
                value: 7,
             },
             {
               label: 'Knowledge sharing session',
                value: 8,
             },
             {
               label: 'Focus group',
                value: 9,
             },
             {
               label: 'TechLock',
                value: 10,
             },
             {
               label: 'Participating in conference as a speaker',
                value: 11,
             },
             {
               label: 'Winning a hackathon',
                value: 12,
             },
             {
                label: 'Participating in a hackathon',
                value: 13,
             },
          ];
        return (
            <form className={styles.card}>
                <center>Add Achievement</center>
                <br></br>
                <br></br>
                <label>Type</label>
                <div className={styles.dropdown}>
                  <Select
                     options={options}  
                     // onSelect={this._onSelect}
                     value = {this.state.category}
                     onChange={(value)=>{this.setState(this.category=value)}}
                     placeholder="Select an option" 
                     className={styles.dropdown}/>
                </div>
                <div>
                    <label>Description</label><br/>
                    <textarea
                            name='description'
                            onChange={this.handleChange} 
                            className={styles.description}/>
                </div>
                <label>Document</label>
                <br/>
                <center>
                <UploadButton 
                    uploader={uploader} 
                    options={{multi: false}} 
                    onComplete={files => console.log(files)}>{({onClick}) =><button onClick={onClick} className={styles.fileUpload}>Upload supporting document...</button>}
                </UploadButton>
                <br/>
                <br/>
                <div className={styles.buttonWrapper}>
                <Button variant="primary" className={styles.button} onClick={() => this.handleSubmit()} align='right'>Submit</Button>
                <Button variant="primary" className={styles.button} onClick={() => this.handleCancel()} align='right'>Cancel</Button>
                </div>
                </center>
            </form>
        );
    }
}

export default AddAchievement;