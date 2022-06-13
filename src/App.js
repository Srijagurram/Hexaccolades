import React from "react";
//import Navbar from './components/Navbar';
import AddAchievement from "./Components/AddAchievement";
import Home from "./Components/Home";
import { PageLayout } from "./Components/PageLayout";
 import {
   Route,
   BrowserRouter as Router,
   Routes,
   Switch
 } from "react-router-dom";
import Achievements from "./Components/Achievements";
import Approvals from "./Components/Approvals";
import LoginView from "./Components/Views/LoginView";
import Profile from "./Components/Profile";

function App() {
  return (
    <PageLayout>
      <Routes>
      <Route exact path ="/" element={<LoginView/>}/>
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/AddAchievement" element={<AddAchievement/>} />
        <Route exact path="/Achievements" element={<Achievements/>} />
        <Route exact path="/Profile" element={<Profile/>} />
        <Route exact path="/Approvals" element={<Approvals/>}/>
      </Routes>
    </PageLayout>
  );
}

export default App;