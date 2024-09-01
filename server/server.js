const express = require('express'); 
const mongoose = require('mongoose')
const cors = require('cors'); 
require('dotenv').config(); 


const Todo = require('./models/todoModel');

//Execute express 
const app = express(); 

//Middlewares
app.use(express.json()); 
// app.use(cors()); 



// Configure CORS to allow requests from your React app
app.use(cors({
  origin: 'http://localhost:3000'
})); 



//connect to MongoDB
mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Connection error: ", err));



//Error middleware
const errorMiddleware = require('./middleware/error-middleware');
app.use(errorMiddleware);


//routes 

app.get('/to-do-app', async(req,res,next)=> {
  try{
  const todos = await Todo.find();
  res.json(todos)
  }catch (error) {
    next(error);
  }
});

//add new tasks
app.post('/to-do-app/new', async(req,res,next)=> {
  try{
    const task = await Todo.create(req.body)
  res.status(201).json({task})
  }catch (error) {
    next(error);
  }
});

// Update a todo by ID
app.put('/to-do-app/update/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    
    if (updatedTodo) {
      res.json({ message: "Task updated successfully", updatedTodo });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    next(error);
  }
});

// delete tasks
app.delete('/to-do-app/delete/:id', async(req,res,next)=>{
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: "Task deleted successfully", result });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    next(error);
  }
});



// server port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    app.get('/', (req,res) => {
  res.send('Mern_Todo_List');
});

});