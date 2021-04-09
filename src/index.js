import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

const DATA = [
    // { id: "todolist-0", name: "Visiter l'île de la Réunion", completed: true },
    // { id: "todolist-1", name: "Développer une todolist en React", completed: false },
    // { id: "todolist-2", name: "Sortir prendre l'air", completed: false },
    // { id: "todolist-3", name: "Faire ma liste de courses", completed: false }
  ];

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));

