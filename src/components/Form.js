import React, { useState } from "react";

function Form(props) {
    // affichage des propriétés héritées du parent (App) de Form() dans la console
    // console.log(props);
    const [name, setName] = useState("");

    // fonction permettant de soumettre le formulaire Ajouter (ajout de la tâche)
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name);
        props.addTask(name);
        setName("");
    }
    // fonction permettant de récupérer la chaine de caractères
    // renseignée dans l'input
    function handleChange(e) {
        e.preventDefault();
        // console.log(e.target.value);
        setName(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Que reste-t-il à faire ?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                attribute={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Ajouter
            </button>
        </form>
    );
}

export default Form;