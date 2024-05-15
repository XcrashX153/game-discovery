import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c691ac8abae14be5ade30296cbff43cb",
  },
});
