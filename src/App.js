import axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";

function App() {
  // const YOUR_APP_ID = "a444adc5";
  // const YOUR_APP_KEY = "208ad404fc07962b9c9602c18d66c8c5";
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const apiUrl = `https://api.edamam.com/search?q=${input}&app_id=${process.env.REACT_APP_YOUR_APP_ID}&app_key=${process.env.REACT_APP_YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`;

  const getRecipes = async () => {
    const results = await axios.get(apiUrl);
    setRecipes(results.data.hits);
    console.log(results.data.hits);
  };

  const submitQuery = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="base">
      <h1>Food Recipes App</h1>
      <div className="inputFields">
        <form onSubmit={submitQuery}>
          <input
            className="queryField"
            placeholder="Enter A Recipe"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="items">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
