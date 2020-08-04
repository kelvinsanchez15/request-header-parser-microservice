const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`));

app.get("/api/whoami", (req, res) => {
  res.json({
    ipadress: req.header("host"),
    language: req.header("accept-language"),
    software: req.header("user-agent"),
  });
});

app.listen(port, () => console.log(`Server runnig at port ` + port));
