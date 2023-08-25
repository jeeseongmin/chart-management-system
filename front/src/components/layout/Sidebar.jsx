import React from 'react';
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/setting/settingSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.setting.sidebar)
  
  return (
    <div id={"sidebar"} class={sidebar ? "sidebarOpen" : "sidebarClose"}>
      <div id={"header"}>
        <button id={"iconButton"} onClick={() => dispatch(toggleSidebar())}>
          <IoMenu size={24} id={"icon"} style={{color: "gray"}}/>
        </button>
        <div><b><span style={{color: "white"}}>CHART</span> <span style={{color: "#a3a3a3"}}>SYSTEM</span></b></div>
      </div>
      <div id={"content"}>
        <div id={"top"}></div>
        <div id={""}></div>
      </div>
    </div>
  );
};

export default Sidebar;
