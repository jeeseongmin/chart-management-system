import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/setting/settingSlice";

const Header = () => {
  const dispatch = useDispatch();
  
  return (
    <header>
      <div>
        <button id={"iconButton"} onClick={() => dispatch(toggleSidebar())}>
          <IoMenu size={24} id={"icon"} style={{color: "gray"}}/>
        </button>
        <div><b>CHART <span style={{color: "#a3a3a3"}}>SYSTEM</span></b></div>
      </div>
      <div>
        <button id="iconButton">
          <CgProfile size={24}/>
        </button>
      </div>
    </header>
  );
};

export default Header;
