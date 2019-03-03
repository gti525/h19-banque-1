import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + localStorage.token,
  }
});
//baseURL: "https://banque1-backend.herokuapp.com/api",
