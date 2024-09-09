import { getListUser } from "../../../services/apiServices";
import { useEffect, useState } from "react";
const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  // componentDidMount
  // stt run dom -> useEffect
  useEffect(() => {
    // call api qua fetch
    fetchListUsers();
    console.log("render useEffect");
  }, []);
  const fetchListUsers = async () => {
    let res = await getListUser();
    console.log(res);
    if (res.EC === 0) {
      // update data cho listUser
      setListUsers(res.DT);
    }
  };
  console.log("render view");
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 && // check list data is null/is not null
            listUsers.map((item, index) => {
              return (
                <tr key={`Table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-secondary">view</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
