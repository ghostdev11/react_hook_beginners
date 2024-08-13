// class components
// hook components  
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{
  state = {
    listUsers : [
      {id:1, name:'Diablo', age:33},
      {id:2, name:'Eric', age:12},
      {id:3, name:'Harry', age:23},
    ]
  }

  render(){
    return (
      <div>
        <UserInfor/>
        <br/> <br/>
        <DisplayInfor listUsers = {this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponents;