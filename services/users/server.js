const app = require("./src");
const { connectDB } = require("./src/models");

connectDB();

app.listen(3000, () => {
  console.log("running on port 3000");
});
