import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
// import { wait } from "@testing-library/user-event/dist/utils";
import { toast } from "react-toastify";

// import { FaPlus } from "react-icons";

function ModalCreateUser(props) {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImg("");
    setPreviewimg("");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [role, setRole] = useState("");
  const [previewimg, setPreviewimg] = useState("");

  const handleUpLoadImg = (event) => {
    // if khi user upload file
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewimg(URL.createObjectURL(event.target.files[0]));
      setImg(event.target.files[0]);
    }
  };

  const handleSubmitData = async () => {
    // validate
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }

    // submit data
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", img);

    let respond = await axios.post(
      "http://localhost:8081/api/v1/participant",
      data
    );
    console.log("respond: ", respond.data);

    if (respond.data && respond.data.EC === 0) {
      toast.success(respond.data.EM);
      handleClose();
    }
    if (respond.data && respond.data.EC !== 0) {
      toast.error(respond.data.EM);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label">UserName</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value={"admin"}>ADMIN</option>
                <option value={"user"}>USER</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label label-upload" htmlFor="img-upload">
                <FaPlus />
                UpLoad Image
              </label>
              <input
                type="file"
                id="img-upload"
                hidden
                onChange={(event) => handleUpLoadImg(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewimg ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={previewimg} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitData()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser;
