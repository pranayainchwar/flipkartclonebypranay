import axios from "axios";

const URL = "https://flipkart-backend-mvmk.onrender.com";
//http://localhost:8000 (for deveopeing mode )

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login Api", error);
    return error.response;
  }
};
