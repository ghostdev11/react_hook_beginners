// class components
// hook components
import {
  eventWrapper,
  isLabelWithInternallyDisabledControl,
} from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import "./DisplayInfor.scss";
// class MyComponents extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Diablo", age: "11" },
//       { id: 2, name: "Eric", age: "17" },
//       { id: 3, name: "Harry", age: "23" },
//     ],
//   };

//   handlerAddUser = (userObj) => {
//    // console.log(">>>check data from parent:", userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handlerDeleteUser = (userId)=> {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers : listUserClone
//     })
//   }
//   render() {
//     return (
//       <div>
//         <AddUserInfor handlerAddUser={this.handlerAddUser} />
//         <br /> <br />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handlerDeleteUser = {this.handlerDeleteUser}
//         />
//       </div>
//     );
//   }
// }
const MyComponents = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Diablo", age: "11" },
    { id: 2, name: "Eric", age: "17" },
    { id: 3, name: "Harry", age: "23" },
  ]);

  const handlerAddUser = (userObj) => {
    // console.log(">>>check data from parent:", userObj);
    setListUsers([userObj, ...listUsers]);
  };

  const handlerDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
    // this.setState({
    //   listUsers : listUserClone
    // })
  };
  return (
    <>
      <div>
        <AddUserInfor handlerAddUser={handlerAddUser} />
        <br /> <br />
        <DisplayInfor
          listUsers={listUsers}
          handlerDeleteUser={handlerDeleteUser}
        />
      </div>
    </>
  );
};
export default MyComponents;
