import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
// stateless(viết bằng class) - stateful(viết bằng function components)
// class DisplayInfor extends React.Component {
//   render() {
//     console.log(">>check call render");
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handlerDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  // in function component no function setState is update biến state
  //  const [isNameState(Name state), setNameState(công cụ cập nhật State)] = useState();
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  // định nghĩa 1 function
  const handlerShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span
          onClick={() => {
            handlerShowHideListUser();
          }}
        >
          {
            isShowHideListUser === true ? "Hide ListUser" : "Show ListUser"
          }
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handlerDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
