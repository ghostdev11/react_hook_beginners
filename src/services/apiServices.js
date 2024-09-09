import instance from "../utils/axiosCustom";
const postCreateNewUser = (email, password, username, role, img) => {
  // submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", img);
  return instance.post("api/v1/participant", data);
};

const getListUser = () => {
  return instance.get("api/v1/participant/all");
};
export { postCreateNewUser };
export { getListUser };
