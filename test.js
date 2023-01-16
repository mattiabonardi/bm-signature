import express from "express";

const app = express();
app.use(express.static("./"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App listening on the port " + PORT);
});
