import axios from "axios";

export default axios.create({
  baseUrl: "https://dummyapi.io/data/v1/",
  headers: {
    "app-id": "0JyYiOQXQQr5H9OEn21312",
  },
});
