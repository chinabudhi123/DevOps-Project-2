const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

let bookings = [];

app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.json());

app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

app.post("/api/book", (req, res) => {
  const { name, seat } = req.body;
  bookings.push({ name, seat });
  res.json({ message: "Booking successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

