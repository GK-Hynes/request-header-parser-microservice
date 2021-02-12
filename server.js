const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// enable CORS so the API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const ipaddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({ ipaddress, language, software });
});

app.listen(port, function () {
  console.log(`Your app is listening on port ${port}`);
});
