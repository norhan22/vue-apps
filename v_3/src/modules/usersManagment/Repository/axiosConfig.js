import axios from "axios";

export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "62d2cbf63d3b7134f1f89d2e",
  },
});
