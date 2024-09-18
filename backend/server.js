const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const parkingRoutes = require('./routes/parkingRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://navmanak213:rdFodiy2TsiJg7YZ@cluster0.moqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/parking', parkingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
