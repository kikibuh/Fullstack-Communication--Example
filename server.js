//Backend
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Statische Dateien (HTML, CSS, JavaScript)
app.use(express.static("public"));

// GET-Anfrage-Handler
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
