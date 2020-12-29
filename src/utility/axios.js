import axios from "axios";
import useUser from "./useUser";
import { backendURL } from "../config/vars";
const { user } = useUser();

let headers = {};

if (user != null) {
  headers = {
    Authorization: `Bearer ${user.token}`,
  };
}

export default axios.create({
  baseURL: backendURL + "/dashboard",
  headers,
});
