import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from './axios';
import styles from './components/Todo/styles'; // Ensure this path is correct

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/todos');
    
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement
reportWebVitals();