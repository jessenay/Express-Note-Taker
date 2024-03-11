const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "db/db.json"))
    );

    