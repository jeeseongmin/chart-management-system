import React from 'react';
import Contents from "./Contents";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const ContentLayout = ({children}) => {
  
  const sidebar = useSelector((state) => state.setting.sidebar);
  
  return (
    <div id={"contentLayout"}>
      <Sidebar/>
      <div id={"workspaceHeader"}>
        <div style={{display: "flex", alignItems: "center", gap: "16px", border: "1px solid red"}}>
          <h1 style={{margin: 0, padding: 0}}>My WorkSpace</h1>
          <div style={{color: "white", backgroundColor: "#35393f", fontWeight: "lighter", padding: "4px 12px"}}>소유자
          </div>
        </div>
        <div></div>
      </div>
      <Contents/>
    </div>
  );
};

export default ContentLayout;
