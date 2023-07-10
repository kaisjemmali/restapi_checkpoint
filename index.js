const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UsersRoutes = require("./Routes/usersRoutes");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
dotenv.config();
app.use("/api", UsersRoutes);

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
