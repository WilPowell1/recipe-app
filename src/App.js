import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import './App.css';


const App = () => {

  const APP_ID = process.env.REACT_APP_API_ID
  const APP_KEY = process.env.REACT_APP_API_KEY

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" 
               type="text" 
               value={search} 
               onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
        <Recipes 
            recipes={recipes}/>
      </form>
    </div>
  );
}

export default App;
