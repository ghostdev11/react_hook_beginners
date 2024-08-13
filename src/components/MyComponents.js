// class components
// hook components
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Diablo", age: "11" },
      { id: 2, name: "Eric", age: "17" },
      { id: 3, name: "Harry", age: "23" },
    ],
  };

  handlerAddUser = (userObj) => {
    console.log('>>>check data from parent:', userObj)
    this.setState({
      listUsers: [userObj, ...this.state.listUsers]
    })
  };
  render() {
    return (
      <div>
        <AddUserInfor handlerAddUser={this.handlerAddUser} />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponents;
