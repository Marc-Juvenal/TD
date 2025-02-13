import { useState, useEffect, useContext } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { ThemeContext, ThemeProvider } from "./components/ThemeContext";
import "./theme.css";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);


  // Récupérer le contexte du thème
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

	// Appliquer le thème au body
	useEffect(() => {document.body.className = isDarkMode ? "dark" : "light";}, [isDarkMode]);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };


  const [activeCard, setActiveCard] = useState(null);
  const onDrop = (status, position) => {
    console.log(
          `${activeCard} is going to place into ${status} and at the position ${position}`
    );

    if (activeCard === null || activeCard === undefined) return;

	const TaskToMove = tasks[activeCard];
	const updateTasks = tasks.filter((task, index) => index !== activeCard);

	updateTasks.splice(position, 0, {
		...TaskToMove,
		status: status,
	});

	setTasks(updateTasks);
  setActiveCard(null);
  };

  return (
    
    <div className="app">
      {/* Bouton pour basculer le thème */}
			<button type="button" onClick={toggleTheme} className="theme-toggle-button">
				{isDarkMode ? "Mode Jour ☀️" : "Mode Nuit 🌙"}
			</button>

      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  
  );
};

const Main = () => (
  <ThemeProvider>
  <App />
</ThemeProvider>
);


export default Main;
