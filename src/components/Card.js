import React from "react";

const Card = ({ recipe }) => {
    return (
        <li className="card">
            <h3>{recipe.strMeal}</h3>
            <p>Origin: {recipe.strArea}</p>
            <div className="img-container">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal + "pictures"}
                />
            </div>
            <p id="instruction">{recipe.strInstructions}</p>
        </li>
    );
};

export default Card;
