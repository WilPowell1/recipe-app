import React from "react";
import Recipe from "./Recipe";

const Recipes = ({ recipes }) => {
    return (
        <div className="recipes">
        {recipes.map(recipe => (
            <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
            />
        ))}
        </div>
    )
}

export default Recipes;