import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {

    return (
        <div className="recipe">
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ol>
            <img src={image} alt=""/>
            
        </div>
    );
}

export default Recipe;