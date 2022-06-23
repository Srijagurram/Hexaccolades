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
      categoryID:1,
      category:'',
      proof:'',
      completedOn:new Date(),
      owner:1,
      status:"Pending",
      categories:[]
    };

    this.handleDescriptionChange=this.handleDescriptionChange.bind(this)
    this.handleCategoryChange=this.handleCategoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }
    
  handleFileChange = (e)=>{
    const files = Array.from(e.target.files)
    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    console.log(formData)
    fetch('https://localhost:44355/Achievement/upload', {
     method: 'POST',
     body: formData
     })
     .then(res => res.json())
     .then(response => {
       this.setState({ 
         proof:response.dbPath
       },console.log(this.state.proof))
     })
  }
  handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
      };
  handleCategoryChange=(e)=>{
    //console.log(e.target.value)
        this.setState({categoryID: Number(e.target.value)})
        //sessionStorage.setItem("category",this.state.category);
        //console.log(this.state.category)
    };

      handleSubmit=(e)=>{
        //console.log(this.state)
         var body = {
            categoryID: this.state.categoryID,
            userID:this.state.owner,
            status:this.state.status,
            proof:this.state.proof,
            completedOn:this.state.completedOn,
            description : this.state.description,
        }
    
        console.log(body);
            if(this.state.categoryID==""){
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
     
        // headers.append('Access-Control-Allow-Origin',url);
        // headers.append('Access-Control-Allow-Credentials','true');
     
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
        sessionStorage.setItem("categoryID",this.state.categoryID);
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

      uploadFile(file) {
        fetch('https://localhost:44355/Achievement/upload', {
          // content-type header should not be specified!
          method: 'POST',
          body: file,
        })
          .then(response => response.json())
          .then(success => {
            // Do something with the successful response
            this.setState({proof:success})
          })
          .catch(error => console.log(error)
        );
      }

      renderCategories(){
        const url = "https://localhost:44355/Category";

         let headers = new Headers();
         headers.append('Content-Type','application/json');
        
          fetch(url,{
             headers:headers,
             method: 'GET',
             //body:JSON.stringify()
             })
             .then(response=>{return response.json()})
             .then(res=>{this.setState({categories:res})             
         })
      }

      componentDidMount(){
        this.renderCategories();
      }
    render(){
      
        const uploader = new Uploader({
            // Get production API keys from Upload.io
            apiKey: "free"
          });

          const options = this.state.categories.map(category=>category)

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
                        {options.map(arrayItem => <option value={arrayItem.id}>{arrayItem.name}</option>)}
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
                {/* <UploadButton 
                    uploader={uploader} 
                    options={{multi: false}} 
                    value={this.state.proof}
                    onComplete={files => {console.log(files)}}>{({onClick}) =><button onClick={this.uploadFile(value)} className={styles.fileUpload}>Upload supporting document...</button>}
                </UploadButton> */}
                <input type="file" className={styles.fileUpload} onChange={this.handleFileChange}/>
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
