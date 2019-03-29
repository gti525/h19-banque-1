import axios from "axios";

export default axios.create({
  //baseURL: "https://banque1-backend-new.herokuapp.com/api",
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://banque1-test.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer " + localStorage.token,
  }
});

