const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');



dotenv.config();

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controllers/todoController');


//App Config
const app = express();
const PORT = process.env.PORT || 8000;
const connectionURL = process.env.MONGO_URI


//MIDDLEWARE
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(connectionURL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

.catch((error) => {
    console.error('Database connection error:', error);
}
);

// API Endpoints

// Get todos list
app.get('/todos', getTodos)

// Create a new Todo
app.post('/todos', createTodo)

// Update a Todo
app.put('/todos/:id', updateTodo)

// Delete a Todo
app.delete('/todos/:id', deleteTodo)

// Database Connection and Server Start
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });