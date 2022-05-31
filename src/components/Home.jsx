import { Button } from "bootstrap";
import React, { Component } from "react";
import { PageLayout } from "./PageLayout";
import {Link} from 'react-router-dom';


class Home extends Component{
    render(){
        return (
            <div>
            <PageLayout>
                <Link to='/AddAchievement'>
                    <Button variant="secondary" className="ml-auto">Add an Achievement</Button>
                </Link> 
                <p>This is the Home!</p>
                 <ul>
                    {/* <li>
                    <Link to="/Home">Home</Link>
                    </li> */}
                    <li>
                    <Link to="/AddAchievement">AddAchivement</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                </ul> 
            </PageLayout>
            </div>
           
        );
    }
}

export default Home;