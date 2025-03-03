const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('./routes/noteRoutes');

const app = express();

// Middleware
app.use(express.json());

// For development
// app.use(cors());

// For production:
app.use(
  cors({
    origin: "https://mern-workshop-beryl.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow cookies if needed
  })
);

// Routes
app.use('/api/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
