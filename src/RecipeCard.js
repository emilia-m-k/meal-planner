import React, { Component } from "react";
import { IconButton, Ingredients, Tags } from "./Components.js";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.expandCard = this.expandCard.bind(this);
  }

  expandCard() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const recipe = this.props.recipe;
    // console.log(JSON.stringify(recipe));
    return (
      <div key={recipe.id} className="recipe-card mdl-card mdl-shadow--2dp">
        <div className="recipe-card__header">
          <div className="recipe-card__text">
            <div className="recipe-card__title">
              <div className="recipe-card__name">{recipe.name}</div>
              <Tags tags={recipe.tags} />
            </div>
            <Ingredients
              ingredients={recipe.ingredients}
              flow="row wrap"
            ></Ingredients>
          </div>

          <img
            className="recipe-card__thumbnail"
            src={recipe.img}
            alt={`Photograph of ${recipe.name}`}
          />
        </div>

        {this.state.expanded && (
          <div className="mdl-card__supporting-text">{recipe.instruction}</div>
        )}

        <div className="mdl-card__actions">
          <IconButton
            icon={this.state.expanded ? "expand_less" : "expand_more"}
            onClick={this.expandCard}
          ></IconButton>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
