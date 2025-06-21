# 👤 Users Backend (Keploy Assignment)

A simple full-stack CRUD application to manage user data. Built with **Node.js**, **Express**, and **PostgreSQL** (hosted via **NeonDB**) for the backend, and a clean **HTML/JS frontend** that interacts with the REST API.

---

## 📦 Tech Stack

- **Backend**: Node.js + Express
- **Database**: PostgreSQL (via NeonDB)
- **Frontend**: HTML, JavaScript
- **Testing**: Postman, curl

---

## 🖥️ Frontend

- Located in the `/frontend` folder
- Interacts with the backend API using `fetch()`
- Lets users **create** and **view** users in the browser
- Automatically fetches and displays user list on form submission

---

## 📁 Folder Structure

```
users-backend/
├── controllers/
│   └── userController.js
├── frontend/
│   └── index.html
├── routes/
│   └── userRoutes.js
├── db.js
├── index.js
├── .env
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/users-backend.git
cd users-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```
DATABASE_URL=your_neon_db_connection_string
PORT=8080
```

> You can get the `DATABASE_URL` from your [NeonDB dashboard](https://neon.tech)

---

## 🚀 4. Run the Server

```bash
npm start
```

The server will auto-create the `users` table if it doesn't exist.

---

## 🌐 Run the Frontend Locally

- Open your browser and go to:

```
http://localhost:8080
```

You’ll see a form to add users and a list of existing users below it.

---

## 🔌 API Endpoints

The following API endpoints are available to interact with the `User` resource:

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /              | Get all users         |
| POST   | /              | Create a new user     |
| GET    | /:id           | Get single user by ID |
| PUT    | /:id           | Update user by ID     |
| DELETE | /:id           | Delete user by ID     |

---

## 📨 Sample POST Request

**POST** `/api/users`

Use the following JSON structure to create a new user:

```json
{
  "name": "Sambhav",
  "email": "sambhav26k@gmail.com",
  "age": 21
}
```

---

## 🛢️ Database Integration

This project uses **NeonDB (PostgreSQL)** as its database. Integration is done via the official [`pg`](https://www.npmjs.com/package/pg) client.

- `db.js` handles connection pooling and table creation.
- SQL queries are written directly in `userController.js`.

The users table schema:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
);
```

---

## ✅ API Testing (curl)

```bash
# Create User
curl -X POST http://localhost:8080/ -H "Content-Type: application/json" -d '{"name":"Sambhav","email":"sambhav26k@gmail.com","age":21}'

# Get All Users
curl http://localhost:8080/

# Get User by ID
curl http://localhost:8080/1

# Update User
curl -X PUT http://localhost:8080/1 -H "Content-Type: application/json" -d '{"name":"Sambhav","email":"sambhav26k@gmail.com","age":21}'

# Delete User
curl -X DELETE http://localhost:8080/1
```
---
