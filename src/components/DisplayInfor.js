import React, {useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
// stateless(viết bằng class) - stateful(viết bằng function components)

const DisplayInfor = (props) => {
  const { listUsers } = props;
  // in function component no function setState is update biến state
  //  const [isNameState(Name state), setNameState(công cụ cập nhật State)] = useState();
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  // định nghĩa 1 function
  const handlerShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  console.log('>>>check call me render')
  useEffect(
    ()=>{
    if(listUsers.length === 0){
      alert('User it not >1')
    }
    console.log('>>>>Check call me useEffect')
  }, [listUsers]
);
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
