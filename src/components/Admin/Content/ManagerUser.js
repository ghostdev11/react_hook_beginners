import ModalCreateUser from "./ModalCreateUser";
import "./ManagerUser.scss";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import TableUser from "./TableUser";
const ManagerUser = () => {
  const [showCreatUser, setShowCreatUser] = useState(false);

  // const handleShowHideModal = (value) => {
  //   setShowCreatUser(value);
  // };
  return (
    <div className="manager-user-container">
      <div className="title">Manager user</div>
      <div className="users-content">
        <div className="btn-add-newUser">
          <button
            className="btn btn-primary"
            onClick={() => setShowCreatUser(true)}
          >
            {" "}
            <FaPlus /> Add new users
          </button>
        </div>
        <div className="table-user-content">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showCreatUser}
          setShow={setShowCreatUser}
          // setShow={handleShowHideModal}
        />
      </div>
    </div>
  );
};
export default ManagerUser;
