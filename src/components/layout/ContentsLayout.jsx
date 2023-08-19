import React from 'react';
import Menubar from "./Menubar";
import Contents from "./Contents";

const ContentLayout = ({children}) => {
  return (
    <div id={"contentLayout"}>
      <Menubar/>
      <Contents/>
    </div>
  );
};

export default ContentLayout;
