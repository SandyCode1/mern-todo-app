import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles';
import axios from '../../axios';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState('');

  React.useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get('/todos');
        const todos = (data.data || []).map(t => ({
          ...t,
          _id: t._id || t.id,
        }));
        setTodos(todos);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const text = inputValue.trim();
    if (!text) return;
    try {
      const { data } = await axios.post('/todos', { text, completed: false });
      const newTodo = { ...data.data, _id: data.data._id || data.data.id };
      setTodos(prev => [...prev, newTodo]);
      setInputValue('');
    } catch (error) {
      console.error('Add error:', error.response?.data || error.message);
    }
  };

  const deleteTodo = async (id) => {
    if (!id) return;
    try {
      await axios.delete(`/todos/${id}`);
      setTodos(prev => prev.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const toggleComplete = async (id, currentStatus) => {
    if (!id) return;
    try {
      const { data } = await axios.put(`/todos/${id}`, { completed: !currentStatus });
      setTodos(prev =>
        prev.map(todo => todo._id === id ? { ...todo, ...data.data } : todo)
      );
    } catch (error) {
      console.error('Toggle error:', error);
    }
  };

  const startEdit = (todo) => {
    if (!todo?._id) return;
    setEditId(todo._id);
    setEditText(todo.text);
  };

  const saveEdit = async (id) => {
    if (!id) return;
    const oldTodo = todos.find(t => t._id === id);
    if (!oldTodo) return;
    try {
      const { data } = await axios.put(`/todos/${id}`, {
        text: editText,
        completed: oldTodo.completed
      });
      const updated = { ...data.data, _id: data.data._id || data.data.id };
      setTodos(prev => prev.map(todo => todo._id === id ? updated : todo));
      setEditId(null);
      setEditText('');
    } catch (err) {
      console.error('Save error:', err.response?.data || err.message);
    }
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Todo App - v2</h1>
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
            key={todo._id}
            style={{
              ...styles.todoItem,
              ...(todo.completed && styles.completed),
            }}
          >
            {editId === todo._id ? (
              <div style={{ display: 'flex', width: '100%' }}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={styles.editInput}
                  onKeyDown={(e) => e.key === 'Enter' && saveEdit(todo._id)}
                />
                <button
                  onClick={() => saveEdit(todo._id)}
                  style={{ ...styles.button, ...styles.saveButton }}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(todo._id, todo.completed)}
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
                    onClick={() => deleteTodo(todo._id)}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

export default Todo;
