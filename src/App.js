import React from "react";
//import Navbar from './components/Navbar';
import AddAchievement from "./components/AddAchievement";
import Home from "./components/Home";
import { PageLayout } from "./components/PageLayout";
 import {
   Route,
   BrowserRouter as Router,
   Routes,
   Switch
 } from "react-router-dom";

function App() {
  return (
    <PageLayout>
      <Routes>
      {/* <Route exact path ="/" render={()=>(
        <Home/>
      )} /> */}
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/AddAchievement" element={<AddAchievement/>} />
      </Routes>
    </PageLayout>
  );
}

export default App;