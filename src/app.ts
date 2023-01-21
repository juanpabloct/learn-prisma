const express = require("express");
const app = express();
app.use(express.json());
app.use("/user", require("../routes/user/index"));
app.listen(9000, () => {
  console.log("🚀Corriendo en el puerto 9000🚀");
});
