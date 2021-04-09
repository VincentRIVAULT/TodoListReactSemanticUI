import React from 'react';

function FilterButton(props) {
    // affichage des propriétés héritées du parent (App) de FilterButton() dans la console
    // console.log(props);
    return (
        <div className="filters btn-group stack-exception">
            <button type="button" className="btn toggle-btn" aria-pressed="true">
                <span className="visually-hidden">Afficher </span>
                <span>Toutes</span>
                <span className="visually-hidden"> tâches</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Afficher </span>
                <span>En cours</span>
                <span className="visually-hidden"> tâches</span>
            </button>
            <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Afficher </span>
                <span>Terminées</span>
                <span className="visually-hidden"> tâches</span>
            </button>
        </div>
    );
}

export default FilterButton;