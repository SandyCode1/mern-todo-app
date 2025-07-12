const {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
  TodoNotFoundError
} = require('./dbTodos');

// Get all todos (with pagination)
const getAllTodos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const todos = await getTodos(page, limit);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single todo by ID
const getTodo = async (req, res) => {
  try {
    const todo = await getTodoById(req.params.id);
    res.json(todo);
  } catch (error) {
    if (error instanceof TodoNotFoundError) {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
};

// Create new todo
const createTodo = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const todo = await addTodo(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update todo
const patchTodo = async (req, res) => {
  try {
    const todo = await updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (error) {
    if (error instanceof TodoNotFoundError) {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
};

// Delete todo
const removeTodo = async (req, res) => {
  try {
    const todo = await deleteTodo(req.params.id);
    res.json({ message: 'Todo deleted successfully', todo });
  } catch (error) {
    if (error instanceof TodoNotFoundError) {
      return res.status(404).json({ error: error.message });
    }
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  patchTodo,
  removeTodo
};