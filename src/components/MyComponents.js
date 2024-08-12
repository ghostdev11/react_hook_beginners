// class components
// hook components  
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{
  render(){
    const MyInfor = ['ac', 'c' , 'v'];
    return (
      <div>
        <UserInfor/>
        <br/> <br/>
        <DisplayInfor name='Diablo' age= {33}/>
        <hr/>
        <DisplayInfor name={'Rimuru'} age= {12} MyInfor={MyInfor}/>
      </div>
    );
  }
}

export default MyComponents;