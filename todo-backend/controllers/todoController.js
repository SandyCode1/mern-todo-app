const mongoose = require("mongoose");
const Todo = require("../dbTodos"); 

// Get Todos List
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 }).lean();
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: ' + error.message
        });
    }
};

// Create a new Todo
const createTodo = async (req, res) => {
    try {
        const { text, completed = false } = req.body;

        if (!text || typeof completed !== 'boolean') {
            return res.status(400).json({
                success: false,
                error: 'Invalid input data'
            });
        }

        const newTodo = await Todo.create({ text, completed });
        res.status(201).json({
            success: true,
            data: newTodo
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error: ' + error.message
        });
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Todo ID'
            });
        }

        const todo = await Todo.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!todo) {
            return res.status(404).json({
                success: false,
                error: 'Todo not found'
            });
        }

        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error: ' + error.message
        });
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Todo ID'
            });
        }

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                error: 'Todo not found'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error: ' + error.message
        });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
