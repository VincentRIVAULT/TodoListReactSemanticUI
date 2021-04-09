/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import '../css/App.css';
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todolist from "./Todolist";
import { nanoid } from "nanoid";

function App(props) {
    // création d'une nouvelle tâche : on récupère la tâche indiquée dans l'input à l'aide de useState()
    // et on l'ajoute au tableau initial ([tasks]) contenant la tâche à ajouter
    const [tasks, setTasks] = useState(props.tasks);

    // fonction nécessaire pour synchroniser l'affichage du navigateur avec le contenu de nos données
    // lorsque l'on coche la case de la tâche indiquant que celle-ci est terminée
    function toggleTaskCompleted(id) {
      // console.log(id);
      const updatedTasks = tasks.map(task => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          // use object spread to make a new object
          // whose `completed` prop has been inverted
          return {...task, completed: !task.completed}
        }
        return task;
      });
      setTasks(updatedTasks);
    }
    // récupération de la liste des tâches existante
    const taskList = tasks.map(task => (
        <Todolist
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
        />
    ));

    // on compte les tâches renseignées
    const tasksNoun = taskList.length !== 1 ? 'tâches restantes' : 'tâche restante';
    const headingText = `${taskList.length} ${tasksNoun}`;
    
    // fonction permettant d'ajouter une tâche
    function addTask(name) {
        // utilisation de la fonctiuon nanoid() pour générer des ids différents automatiquement
        const newTask = { id: "todolist-" + nanoid(), name: name, completed: false };
        // utilisation de "spread syntax" (...) pour copier le tableau initial ([tasks])
        // et ajouter la nouvelle tâche (newTask) à la fin du tableau initial
        setTasks([...tasks, newTask]);
    }

    // fonction permettant de supprimer une tâche
    function deleteTask(id) {
        // console.log(id);
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }
    return (
        <div className="todoapp stack-large">
            <h1>Ma Todolist React !</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                <FilterButton />
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
}

export default App;
