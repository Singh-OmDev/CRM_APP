const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server started running on port number: ${PORT}`);
});
