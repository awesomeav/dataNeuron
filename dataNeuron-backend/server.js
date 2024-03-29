const app = require("./app");
const connectDB = require("./config/db");
// create server
require("dotenv").config();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(port, () => {
  console.log(`Server  is started on port ${port}`);
  connectDB();
});
