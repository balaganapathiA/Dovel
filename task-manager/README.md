# 📝 Simple Task Manager

A minimal task manager web application built with **Next.js**, **Zustand**, and **Tailwind CSS** to demonstrate modern frontend architecture, state management, and user interaction handling.

---

## 🚀 Features Implemented

- ✅ Add new tasks with titles and optional descriptions
- ✅ View all tasks in a clean, responsive UI
- ✅ Mark tasks as complete or incomplete
- ✅ Edit task titles and descriptions
- ✅ Delete tasks with confirmation
- ✅ Filter tasks by **All**, **Active**, or **Completed**
- ✅ Global state management using Zustand
- ✅ Responsive and accessible design with Tailwind CSS
- ✅ Dark mode support (Tailwind-based)
- ✅ Loading state and basic error handling
- ✅ Animated button interactions and UI transitions

---

## 📦 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Persistence**: In-memory (optional: localStorage or API routes)

---

## 💻 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/simple-task-manager.git
cd simple-task-manager
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🧠 Learning Outcomes Achieved

Through building this project, the following concepts were learned and applied:

### ✅ **Next.js Fundamentals**
- Page-based routing using `/pages`
- Dynamic component rendering
- Optional use of API routes for backend simulation

### ✅ **Zustand for State Management**
- Centralized task store
- State actions (add, update, delete, toggle)
- Efficient global state access across multiple components

### ✅ **User Interface & UX**
- Component-based architecture with props and reactivity
- Tailwind-based styling with responsive design and dark mode
- Conditional rendering and form input handling
- Accessible and keyboard-friendly controls

---

## 📷 Screenshots / Demo

_Include screenshots or a video link here if available._

---

## 📁 Project Structure

```
/pages
  index.tsx
  api/tasks.ts (optional)
/components
  TaskInput.tsx
  TaskItem.tsx
  LoadingSpinner.tsx
/store
  taskStore.ts
/styles
  globals.css
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to the creators of:
- [Next.js](https://nextjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)
