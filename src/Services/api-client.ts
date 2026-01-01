import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9f6e9767c894b33b8f0b6928616b7dd",
  },
});
