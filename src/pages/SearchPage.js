import React, { Component } from "react";
import RecipeCard from "../RecipeCard";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  parseRecipes(recipes) {
    let parsedRecipes = recipes.map((item) => {
      let recipe = {
        id: item.idMeal,
        name: item.strMeal || "",
        instruction: item.strInstructions || "",
        ingredients: [],
        tags: [],
        type: [],
        img: item.strMealThumb,
      };
      if (item.strArea) recipe.tags.push(item.strArea);
      if (item.strCategory) recipe.tags.push(item.strCategory);

      for (let i = 1; i < 21; i++) {
        if (!item[`strIngredient${i}`]) break;

        recipe.ingredients.push({
          name: item[`strIngredient${i}`],
          quantity: "",
          unit: item[`strMeasure${i}`],
          id: i,
        });
      }

      return recipe;
    });
    return parsedRecipes;
  }

  handleSearch(e) {
    let searchPhrase = e.target.value;
    this.setState({ searchVal: searchPhrase });
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchPhrase}`
    )
      .then((res) => res.json())
      .then((data) => {
        let parsedRecipes = this.parseRecipes(data.meals);
        this.props.updateSearchResults(parsedRecipes);
      })
      .catch(console.log);
  }

  render() {
    return (
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield">
          <input
            className="mdl-textfield__input"
            type="text"
            id="recipe-search-input"
            value={this.state.searchVal}
            onChange={this.handleSearch}
          />
          <label className="mdl-textfield__label" htmlFor="recipe-search-input">
            Search in TheMealDB
          </label>
        </div>
      </form>
    );
  }
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };

    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(data) {
    this.setState({ recipes: data });
  }

  render() {
    const recipes = this.state.recipes;
    return (
      <div>
        <h4>Recipe search</h4>
        <SearchBar updateSearchResults={this.updateSearchResults} />
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
