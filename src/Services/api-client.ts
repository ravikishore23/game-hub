import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a9190171ee9641939e61b90b0d8792fd",
  },
});
