const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const taskRoutes=require("./Routes/taskRoutes");
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 


app.use(express.json());
app.use(cors());

// Connect to MongoDB using Mongoose
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

app.use("/api/v1", taskRoutes);

// Start the server
(async () => {
  console.log('Starting server');
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
})();
