# todolist-mern

A full-stack to-do list app built on the MERN stack (MongoDB, Express, React, Node) with JWT authentication. Each user registers, logs in, and manages their own private list of todos.

## Features

- Register / login with hashed passwords (bcrypt) and JWT-based sessions
- Protected API routes, users only see and modify their own todos
- Create, view, and delete todos from a React dashboard
- Redux Toolkit for client state, toast notifications for feedback

## Tech Stack

**Backend:** Node, Express 5, Mongoose, jsonwebtoken, bcryptjs  
**Frontend:** React 19, Redux Toolkit, React Router, Axios, React Toastify

## Project Structure

```
backend/
  config/       MongoDB connection
  controllers/  todo + user request handlers
  middleware/   auth (JWT verify) + error handler
  models/       Mongoose schemas (User, Todo)
  routes/       /api/users, /api/goals
  server.js     app entry; serves frontend/build in production
frontend/
  src/app/      Redux store
  src/features/ auth + todo slices and API services
  src/pages/    Dashboard, Login, Register
  src/components/ Header, TodoForm, TodoItem, Spinner
```

## Setup

1. Install dependencies for both apps:

   ```bash
   npm install
   npm install --prefix frontend
   ```

2. Copy `.env.example` to `.env` in the project root and fill in your values:

   ```bash
   cp .env.example .env
   ```

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=<your mongodb connection string>
   JWT_SECRET=<any long random string>
   ```

3. Run the API and client concurrently (API on `:5000`, client on `:3000` with a dev proxy):

   ```bash
   npm run dev
   ```

   Or separately: `npm run server` / `npm run client`.

## API

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| POST | `/api/users` | – | Register a new user |
| POST | `/api/users/login` | – | Log in, returns a JWT |
| GET | `/api/users/me` | Bearer | Current user profile |
| GET | `/api/goals` | Bearer | List the user's todos |
| POST | `/api/goals` | Bearer | Create a todo (`{ text }`) |
| PUT | `/api/goals/:id` | Bearer | Update a todo |
| DELETE | `/api/goals/:id` | Bearer | Delete a todo |

Authenticated requests send `Authorization: Bearer <token>`.

## Production

```bash
npm run build --prefix frontend
NODE_ENV=production npm start
```

Express then serves the built React app from `frontend/build` alongside the API.

## License

MIT © Herui Ray Li
