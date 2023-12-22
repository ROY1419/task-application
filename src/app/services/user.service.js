import axios from "axios";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};



const UserService = {
  getPublicContent,

//   getModeratorBoard,
//   getAdminBoard,
}

export default UserService;
