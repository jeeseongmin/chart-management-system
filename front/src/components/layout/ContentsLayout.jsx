import React from 'react';
import Contents from "./Contents";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const ContentLayout = ({children}) => {
  
  const sidebar = useSelector((state) => state.setting.sidebar);
  
  return (
    <div id={"contentLayout"}>
      <Sidebar/>
      <Contents/>
    </div>
  );
};

export default ContentLayout;
