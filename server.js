const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// static files
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

// 🔥 IMPORTANT CHANGE
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
