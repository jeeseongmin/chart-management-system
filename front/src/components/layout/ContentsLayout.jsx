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
        <div style={{
          width: "80%",
          height: "3rem",
          minWidth: "60rem",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          border: "1px solid red",
          justifyContent: "space-between"
        }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}>
            <h1 style={{margin: 0, padding: 0}}>My WorkSpace</h1>
            <div style={{color: "white", backgroundColor: "#35393f", fontWeight: "lighter", padding: "4px 12px"}}>소유자
            </div>
          </div>
          <div>
            <button style={{
              padding: "4px 12px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              border: "1px solid transparent",
              cursor: "pointer",
            }}>check
            </button>
          </div>
        </div>
        <div style={{
          width: "80%",
          height: "3rem",
          minWidth: "60rem",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          border: "1px solid red",
          justifyContent: "space-between"
        }}>
          <div>
            <button style={{
              padding: "4px 12px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              border: "1px solid transparent",
              cursor: "pointer",
            }}>haha
            </button>
            <button style={{
              padding: "4px 12px",
              fontWeight: "bold",
              backgroundColor: "transparent",
              border: "1px solid transparent",
              cursor: "pointer",
            }}>hoho
            </button>
          </div>
          <div>test</div>
        </div>
      
      </div>
      <Contents/>
    </div>
  );
};

export default ContentLayout;
