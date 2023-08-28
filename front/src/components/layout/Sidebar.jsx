import React from 'react';
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/setting/settingSlice";
import { BsFillPersonFill } from "react-icons/bs";

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
        {/* 기본 스페이스 */}
        <div id={"workspace"}>
          <div id={"spaceTitle"}>
            WORKSPACE
          </div>
          <div id={"space"}>
            <BsFillPersonFill size={16} style={{marginTop: "2px"}}/>
            <span>Polaris Workspace</span>
          </div>
        </div>
        
        {/* 즐겨찾기 스페이스 */}
        <div id={"workspace"}>
          <div id={"spaceSmallTitle"}>
            즐겨찾기
          </div>
          <div id={"space"}>
            <BsFillPersonFill size={16} style={{marginTop: "2px"}}/>
            <span>교육용</span>
          </div>
        </div>
        <button id={"spaceListButton"}>워크스페이스 목록</button>
        
        <div id={""}></div>
      </div>
    </div>
  );
};

export default Sidebar;
