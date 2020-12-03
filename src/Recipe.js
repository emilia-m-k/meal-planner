import React, { Component } from "react";
import { Tags, Ingredients } from "./Components.js";

class Recipe extends Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <div className="recipe">
        <div className="recipe__body">
          <Tags tags={recipe.tags} />
          <div className="flex-row">
            <Ingredients ingredients={recipe.ingredients} flow="column" />
            <div className="flex-column">
              {recipe.img && (
                <img
                  className="recipe__thumbnail"
                  src={recipe.img}
                  alt={`Photograph of ${recipe.name}`}
                />
              )}
              <div className="recipe__type">{recipe.type[0]}</div>
              <div className="recipe__servings">
                <span className="material-icons">people_alt</span>
                <span>{recipe.servings}</span>
              </div>
              <div>{recipe.active ? "Active" : "Not active"}</div>
            </div>
          </div>

          <div className="recipe__instructions">{recipe.instruction}</div>
        </div>
      </div>
    );
  }
}

export default Recipe;
