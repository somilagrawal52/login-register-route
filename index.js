require("dotenv").config();
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5010;
const app = express();
const dashboard = require("./routes/dashboard");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", dashboard);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("server connected"));

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
