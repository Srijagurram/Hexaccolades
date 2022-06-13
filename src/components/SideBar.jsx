

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import "./SideBar.css";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import { SignOutButton } from "./SignOut";
import Home from "./Home";
import AddAchievement from "./AddAchievement";
import { useNavigate } from "react-router-dom";



const SideBar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [activeHome,setActiveHome] = useState(false)
    const [activeAchievements, setActiveAchievements] = useState(false)
    const [activeApprovals, setActiveApprovals] = useState(false)

    const navigate = useNavigate();
    const handleHomeChange=()=>{
      setActiveHome(true)
      setActiveAchievements(false)
      setActiveApprovals(false)
      navigate('/Home')
    }
    //create a custom function that will change menucollapse state from false to true and true to false
    const handleAddAchievementChange = ()=>{
      setActiveAchievements(true)
      setActiveApprovals(false)
      setActiveHome(false)
      navigate('/Achievements')
    }

    const handleApprovalsChange = ()=>{
      setActiveAchievements(false)
      setActiveApprovals(true)
      setActiveHome(false)
      navigate('/Approvals')
    }

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader>
          {/* <div className="logotext">
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div> */}
            {/* <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active = {activeHome} onClick = {handleHomeChange} icon={<FiHome />}>Home</MenuItem>
              <MenuItem active = {activeAchievements} onClick = {handleAddAchievementChange} icon={<FaRegHeart />}>My Achievements</MenuItem>
              <MenuItem active = {activeApprovals} onClick = {handleApprovalsChange} icon={<FaList />}>Approvals</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>{<SignOutButton/>}</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
