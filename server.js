const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res
    .status(200)
    .send({ status: "success", message: "welcome to the backend api" });
});

let Port = process.env.PORT || 8080;
app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});
