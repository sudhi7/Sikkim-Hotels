import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333/",
});

// json-server --watch src/data/db.json --port 3333