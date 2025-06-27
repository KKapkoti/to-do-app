# To-do-app

# Taskure - Your Daily Task Cure

Taskure is a modern, beautiful **To-Do List App** with real-time clock, calendar, and CRUD functionality. Designed with **Glassmorphism UI**, it's built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

---

##  Features

- Add, update, and delete tasks
- Mark tasks as completed
- Built-in calendar and real-time clock
- Stylish UI with glassmorphism and responsive design
- REST API integration with MongoDB backend

---

## Tech Stack

| Frontend         | Backend               | Database   |
|------------------|------------------------|------------|
| React            | Node.js + Express.js   | MongoDB    |
| CSS              | REST API               | Mongoose   |

---

## Preview

> _Taskure UI preview_

![Taskure Preview](./public/taskure-ss.jpg) <!-- Replace with actual image path or upload -->

---

## Folder Structure

```

taskure/
├── client/
│   ├── public/
│   │   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoItem.jsx
│   │   │   ├── Clock.js
│   │   │   └── CalendarBox.jsx
│   │   ├── styles/
│   │   │   └── App.css
│   │   └── App.jsx
│   └── index.js
├── server/
│   ├── middleware/
│   │   └── error-middleware.js
│   ├── models/
│   │   └── todoModel.js
│   └── server.js

````

---

##  Installation

### Prerequisites:
- Node.js & npm
- MongoDB (local or Atlas)

### Clone the Repository

```bash
git clone https://github.com/KKapkoti/to-do-app.git
cd taskure
````

### 1️⃣ Setup Backend

```bash
cd server
npm install
npm start
```

By default, backend runs on `http://localhost:4000`

### 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:3000` (or default port)

---

## 📬 API Endpoints

| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| GET    | `/to-do-app`            | Get all tasks     |
| POST   | `/to-do-app/new`        | Create a new task |
| PUT    | `/to-do-app/update/:id` | Update a task     |
| DELETE | `/to-do-app/delete/:id` | Delete a task     |

---

## Future Improvements

*  Add reminders/notifications
*  Build mobile app with React Native
* Theme switching (dark/light mode)
*  User authentication (JWT or OAuth)

---

##  Credits

Created with 💖 by Kavita Kapkoti(https://github.com/KKapkoti)

---

