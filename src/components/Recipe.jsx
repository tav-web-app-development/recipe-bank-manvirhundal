import { useState, useEffect } from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Recipe({ title, description, ingredients, directions }) {
  const handleRecipeClick = () => {
    document.title = title;
  };
  return (
    <div className="recipe">
      <h2 onClick={handleRecipeClick}>{title}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Ingredients:</strong> {ingredients}</p>
      <p><strong>Directions:</strong> {directions}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Recipe App. All rights reserved.</p>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
    return () => {
      console.log('Unmounted');
    };
  }, []);

  const fetchRecipes =  async function fetchRecipes() {
    const results = await fetch("https://api.sampleapis.com/recipes/recipes");
    const json = await results.json();
    setRecipes(json);
  }
  fetchRecipes();

  const handleRecipeClick = (title) => {
    document.title = title;
  };

  return (
    <div className="App">
      <Navbar />
      <div className="recipe-container">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.title}
            title={recipe.title}
            description={recipe.description}
            ingredients={recipe.ingredients}
            directions={recipe.directions}
            onClick={() => handleRecipeClick(recipe.title)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
