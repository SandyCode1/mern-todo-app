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
## UI Introduction: Todo App with a single task ("finish project") displayed.
<img width="1920" height="1080" alt="Screenshot (580)" src="https://github.com/user-attachments/assets/5e1d3ee3-f37b-4f65-8969-d1251a33d0d6" />
## Add tasks in seconds—type your task and hit 'Add' to save it to your list.
<img width="1920" height="1080" alt="Screenshot (587)" src="https://github.com/user-attachments/assets/8202224e-bbc3-4747-8733-f5f61437344e" />
## Tasks are securely saved to the database as soon as you add them.
<img width="948" height="705" alt="Screenshot (586)" src="https://github.com/user-attachments/assets/b7c84014-5301-48a6-8071-4eabf39090fb" />
## The app synchronizes with the database instantly - when you add or delete tasks, changes are immediately reflected in MongoDB. All CRUD operations (Create, Delete) trigger real-time database updates via Express.js API endpoints. 
<img width="1920" height="1080" alt="Screenshot (585)" src="https://github.com/user-attachments/assets/f7b9e1c8-5578-4382-9e02-db018b33a765" />
<img width="808" height="811" alt="Screenshot (584)" src="https://github.com/user-attachments/assets/80d477ba-e290-4286-983e-9f2015fd38bc" />
<img width="1920" height="1080" alt="Screenshot (581)" src="https://github.com/user-attachments/assets/d0896f67-1312-4309-947a-cb9929cd0713" />
<img width="936" height="684" alt="Screenshot (582)" src="https://github.com/user-attachments/assets/e01104c8-ff5c-45d3-a9f9-04cfae08e967" />



## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## Acknowledgments

- MERN stack documentation
- MongoDB Atlas for cloud database hosting
- React community for awesome components
