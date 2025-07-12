# MERN Todo App

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to create, read, update, and delete todo items.

## Features

- Create new todo items
- Edit existing todo items
- Delete todos
- Responsive design
- Real-time updates

## Technologies Used 
Following is Tech stack break down
### Frontend
- React.js
- Axios for API requests
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)

## Project Structure

```
MERN-TODO-APP/
├── todo-backend/               # Backend server
│   ├── controllers/            # Route controllers
│   │   └── todoController.js   # Todo CRUD operations
│   ├── .env                    # Environment variables
│   ├── dbTodos.js              # MongoDB model/schema
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express server setup
│
└── todo-frontend/              # Frontend React app
    ├── public/                 # Static files
    ├── src/
    │   ├── components/Todo/    # Todo component
    │   │   ├── index.js       # Main component logic
    │   │   └── styles.js      # Component styling
    │   ├── App.js             # Main App component
    │   └── axios.js           # Axios configuration
    └── package.json           # Frontend dependencies
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-todo-app.git
   cd mern-todo-app
   ```

2. Set up the backend:
   ```bash
   cd todo-backend
   npm install
   ```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
   ```
   MONGO_URI=your_mongo_uri_here
   PORT=8000
   ```

4. Set up the frontend:
   ```bash
   cd ../todo-frontend
   npm install
   ```

5. Configure the API base URL in `todo-frontend/src/axios.js` if needed.

## Running the Application

1. Start the backend server:
   ```bash
   cd todo-backend
   npm start
   ```

2. In a separate terminal, start the frontend:
   ```bash
   cd todo-frontend
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint    | Description                     |
|--------|-------------|---------------------------------|
| GET    | /todos      | Get all todos                   |
| POST   | /todos      | Create a new todo               |
| PUT    | /todos/:id  | Update a todo                   |
| DELETE | /todos/:id  | Delete a todo                   |

## Screenshots

![Todo App Interface](Screenshot (585).png)
![Database Structure](Screenshot (586).png)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## Acknowledgments

- MERN stack documentation
- MongoDB Atlas for cloud database hosting
- React community for awesome components
