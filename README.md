# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 📝 React ToDo List App

This is a simple and interactive **ToDo List App** built using React. It allows users to add tasks, mark them as complete, and delete them dynamically. The app ensures that duplicate tasks are not added.

## 🖼️ Screenshot

Here is a preview of the ToDo List App:
![Screenshot Todo](https://github.com/user-attachments/assets/a5a31ed1-8906-4749-be52-c4552ea634a5)


## 🚀 Features

- ✅ Add new ToDo items
- 🚫 Prevent duplicate entries
- ✏️ Click to toggle task completion
- ❌ Delete tasks with a single click
- 🎯 Built using React functional components and Hooks (`useState`)

---

## 📁 Project Structure

src/
├── App.css
├── App.js
├── index.js
└── logo.svg


---

## 🧠 How It Works

### 1. `App.js`
- Maintains the `todolist` state.
- Contains a form to add new ToDo items.
- Renders the list of ToDo items via `ToDoListItems` component.
- Prevents duplicate entries using `Array.includes()`.

### 2. `ToDoListItems` Component
- Accepts a single ToDo item and its index as props.
- Toggles completion status (via CSS class `completetodo`) when clicked.
- Deletes an item on clicking the `×` symbol.

---

## 💻 Usage

### ✅ To Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-react-app.git
   cd todo-react-app
   
2.Install dependencies:
  npm install
3.Start the development server:
  npm start

The app will run on http://localhost:3000

📌 Notes
Tasks must be unique — duplicates will trigger an alert.

Clicking a task toggles its completion style.

The × symbol deletes the task using its index.


