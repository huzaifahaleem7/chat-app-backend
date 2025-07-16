import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { port } from "./constants.js";
import dbConnection from "./db/index.js";

dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`DB Connection failed: ${error}`);
  });
