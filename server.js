const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// 👇 static frontend serve karega
app.use(express.static(path.join(__dirname, 'public')));

let bookings = [];

// test route
app.get('/api', (req, res) => {
    res.send("Server is running");
});

// booking API
app.post('/book', (req, res) => {
    const data = req.body;
    bookings.push(data);
    console.log("New Booking:", data);
    res.json({ message: "Booking saved successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});