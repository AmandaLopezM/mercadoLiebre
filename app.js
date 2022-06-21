const path = require("path");
const express = require("express");
const server = express();

const public = path.resolve(__dirname, "public");
server.use(express.static(public));

server.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "home.html"))
);

server.post("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "home.html"))
);

server.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "register.html"))
);

server.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "login.html"))
);

server.listen(process.env.PORT || 3000, () =>
  console.log("Abriendo el servidor http://localhost:3000")
);
