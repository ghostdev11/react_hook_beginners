// class components
// hook components  
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
class MyComponents extends React.Component{
  render(){
    // .jsx
    return (
      <div>
        <UserInfor/>
      </div>
    );
  }
}

export default MyComponents;