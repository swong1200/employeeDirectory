import axios from "axios";

// eslint-disable-next-line
export default {
  // Gets all employees
  search: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
