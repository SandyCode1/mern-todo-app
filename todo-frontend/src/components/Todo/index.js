import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles';
import axios from '../../axios';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState('');

  // Fetch Todos
  React.useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get('/todos');
        setTodos(data.data || []);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchTodos();
  }, []);

  // Add Todo
  const addTodo = async () => {
    if (inputValue.trim()) {
      try {
        const { data } = await axios.post('/todos', {
          text: inputValue,
          completed: false
        });
        setTodos(prev => [...prev, data.data]);
        setInputValue('');
      } catch (error) {
        console.error('Add error:', error.response?.data || error.message);
      }
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  // Toggle Complete
  const toggleComplete = async (id, currentStatus) => {
    try {
      const { data } = await axios.put(`/todos/${id}`, {
        completed: !currentStatus
      });
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? data.data : todo
        )
      );
    } catch (error) {
      console.error('Toggle error:', error);
    }
  };

  // Start editing
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save changes
  const saveEdit = async (id) => {
    try {
      const oldTodo = todos.find(t => t.id === id);
      const res = await axios.put(`/todos/${id}`, {
        text: editText,
        completed: oldTodo.completed
      });

      const updated = res.data.data;

      setTodos(prev => prev.map(todo =>
        todo.id === id ? updated : todo
      ));
      setEditId(null);
      setEditText('');
    } catch (err) {
      console.error('Save error:', err);
    }
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Todo App</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={inputValue}
          style={styles.input}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
        />
        <button style={styles.button} onClick={addTodo}>Add</button>
      </div>

      <ul style={styles.todoList}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              ...styles.todoItem,
              ...(todo.completed && styles.completed),
            }}
          >
            {editId === todo.id ? (
              <div style={{ display: 'flex', width: '100%' }}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={styles.editInput}
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit(todo.id)}
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  style={{ ...styles.button, ...styles.saveButton }}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(todo.id, todo.completed)}
                  style={styles.todoText}
                >
                  {todo.text}
                </span>
                <div style={styles.todoActions}>
                  <button
                    onClick={() => startEdit(todo)}
                    style={{ ...styles.button, ...styles.editButton }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    style={{ ...styles.button, ...styles.deleteButton }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

export default Todo;
