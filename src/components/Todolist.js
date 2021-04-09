import React from "react";

// import 'semantic-ui-css/semantic.min.css';

export default function Todolist(props) {
  // affichage des propriétés héritées du parent (App) de Todolist() dans la console
  // console.log(props);
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                  {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                  Modifier <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                  Effacer <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}

