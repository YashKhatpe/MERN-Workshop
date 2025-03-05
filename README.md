# MERN Stack Workshop

### JavaScript Required for Learning MERN Stack

To effectively learn and work with the MERN stack, you should have a strong understanding of the following JavaScript concepts:

- **map()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- **filter()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- **reduce()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- **forEach()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- **find()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- **includes()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- **async/await** - [Learn more](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- **.then()/.catch()** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- **Promises** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **ES6 Modules (import/export)** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- **Destructuring** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- **Spread and Rest Operators** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- **Arrow Functions** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- **Closures** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- **Hoisting** - [Learn more](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- **Event Loop & Callbacks** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- **Prototype & Prototypal Inheritance** - [Learn more](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- **Local Storage & Session Storage** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- **fetch API & Axios** - [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- **Debouncing & Throttling** - [Learn more](https://www.freecodecamp.org/news/debounce-and-throttle-in-javascript/)

Having a solid grasp of these topics will make it easier to build full-stack applications using MongoDB, Express.js, React, and Node.js.

## Part 1: React.js (Frontend)

### 🔹 Goal: Set up a basic React app with vite.

### 🛠️ Topics to Cover (With Depth Levels)

| Topic | How Deep to Go? | Notes |
|--------|----------------|-------|
| Introduction to React | Overview | Explain what React is, why it's popular. |
| Setting up React (Vite) | Hands-on setup | `npm create vite@latest my-app` |
| Folder Structure & Components | Cover JSX, Props | Explain `src/`, components, props. |
| State & Events (useState) | Hands-on | Counter example, form handling. |
| Fetching Data (useEffect) | Hands-on API call | Fetch sample API (JSONPlaceholder). |
| React Router | Basic Navigation | Create Home & About pages. |
| Project: Basic UI for Notes App | Start frontend project | Simple UI (input box, list of notes). |

### 📌 Hands-on Exercise (End of React Section)
- Build a simple UI where users can type a note and display it in a list.
- Notes won’t persist yet—we will manage them in `useState`.

---

## 🌟 Part 2: Node.js + Express.js (Backend) 

### 🔹 Goal: Set up an API and fetch notes from a json file.

### 🛠️ Topics to Cover (With Depth Levels)

| Topic | How Deep to Go? | Notes |
|--------|----------------|-------|
| What is Node.js? | Overview | Explain JS runtime, NPM. |
| Setting up Node.js | Hands-on setup | `npm init`. |
| Creating Routes (GET, POST) | Hands-on | Simple API with `/api/notes`. |
| Middleware (CORS, JSON Parsing) | Covering basic setup | Explain why CORS is needed. |
| Project: Store Notes in Backend | Add Express route for notes | Store notes in a temporary array. |

### 📌 Hands-on Exercise (End of Node.js Section)
- Modify the React app to fetch notes from the backend tomorrow using Express.js backend.


---

## 🚀 End of Day 1: What Should Be Achieved?

✅ **React**: Participants can build UI, use state, and fetch data.
✅ **Node.js**: They can create a basic http server and serve data.
✅ **Fetching data from json file**: The http server will fetch the data stored in the notes.json file at the backend.

---

# Day 2: Express.js & MongoDB Integration

## 🎯 Goal: Connect Express.js with MongoDB and enable CRUD operations.

---

## 🛠️ Topics to Cover (With Depth Levels)

### 1️⃣ MongoDB & Mongoose Setup (30-40 min)
| Topic | Depth | Notes |
|--------|--------|--------|
| What is MongoDB? | 5-10 min overview | Explain NoSQL vs SQL, advantages of MongoDB |
| Setting up MongoDB (Local/Atlas) | Hands-on | Install MongoDB locally or use MongoDB Atlas |
| Installing Mongoose | Hands-on | `npm install mongoose` |
| Connecting MongoDB with Express | Hands-on | Create a connection using Mongoose |

📌 **Hands-on Exercise:** Connect a Node.js app with MongoDB and verify the connection.

---

### 2️⃣ Building a Notes API (45-60 min)
| Topic | Depth | Notes |
|--------|--------|--------|
| Creating a Notes Schema | Hands-on | Define `title` and `content` fields in Mongoose |
| Creating Routes (CRUD) | Hands-on | Implement GET, POST, PUT, DELETE |
| Validations & Error Handling | Cover Basic | Ensure required fields, handle errors |
| Testing API with Postman | Hands-on | Test CRUD operations |

📌 **Hands-on Exercise:** Build an API where users can create, read, update, and delete notes.

---

### 3️⃣ Connecting Frontend to Backend (45 min)
| Topic | Depth | Notes |
|--------|--------|--------|
| Fetching Notes from MongoDB | Hands-on | Use `axios.get` in React to fetch notes |
| Adding Notes to MongoDB | Hands-on | Use `axios.post` to add notes |
| Updating & Deleting Notes | Hands-on | Implement `axios.put` and `axios.delete` |

📌 **Hands-on Exercise:** Modify the React frontend to persist notes in MongoDB via Express.js API.

---

## 🚀 End of Day 2: What Should Be Achieved?
✅ **MongoDB Setup:** Participants can set up MongoDB and connect it to Express.
✅ **CRUD API:** Users can create, read, update, and delete notes via API.
✅ **Full-Stack Integration:** React app fetches and modifies data stored in MongoDB.

🎯 **Next Steps:** Implement authentication and authorization on Day 3! 🔐



Happy Coding! 🚀

