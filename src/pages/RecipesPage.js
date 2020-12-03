import React, { Component } from "react";
import RECIPES from "../data.js";
import { Checkbox, Modal, IconButton } from "../Components.js";
import Recipe from "../Recipe";

class RecipeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.recipe,
    };

    this.handleActive = this.handleActive.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectedRecipe = this.handleSelectedRecipe.bind(this);
  }

  handleActive() {
    let updatedRecipe = { ...this.state.recipe };
    updatedRecipe.active = !updatedRecipe.active;

    this.setState({ recipe: updatedRecipe });
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    let updatedRecipe = { ...this.state.recipe };
    updatedRecipe.deleted = true;

    this.setState({ recipe: updatedRecipe });
  }

  handleSelectedRecipe() {
    this.props.handleSelectedRecipe(this.state.recipe);
  }

  render() {
    const recipe = this.state.recipe;
    if (recipe.deleted) return null;
    return (
      <tr onClick={this.handleSelectedRecipe}>
        <td className="mdl-data-table__cell--non-numeric">{recipe.name}</td>
        <td className="mdl-data-table__cell--non-numeric">
          {recipe.type.join(", ")}
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          {recipe.tags.join(", ")}
        </td>
        <td>
          <Checkbox
            model={recipe.active}
            onChange={this.handleActive}
            id={recipe.id}
          />
        </td>
        <td>
          <IconButton
            icon="delete_forever"
            colored={true}
            onClick={this.handleDelete}
          />
        </td>
      </tr>
    );
  }
}

class RecipesTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];

    this.props.recipes.forEach((recipe) => {
      if (!recipe.deleted)
        rows.push(
          <RecipeRow
            recipe={recipe}
            key={recipe.id}
            handleSelectedRecipe={this.props.handleSelectedRecipe}
          />
        );
    });
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Name</th>
            <th className="mdl-data-table__cell--non-numeric">Type</th>
            <th className="mdl-data-table__cell--non-numeric">Tags</th>
            <th className="mdl-data-table__cell--non-numeric">Active</th>
            <th className="mdl-data-table__cell--non-numeric">Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES,
      selectedRecipe: null,
    };

    this.handleSelectedRecipe = this.handleSelectedRecipe.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSelectedRecipe(selectedRecipe) {
    this.setState({ selectedRecipe: selectedRecipe });
  }

  closeModal() {
    this.setState({ selectedRecipe: null });
  }
  render() {
    return (
      <div>
        <h4>Recipes</h4>
        <RecipesTable
          recipes={this.state.recipes}
          selectedRecipe={this.state.selectedRecipe}
          handleSelectedRecipe={this.handleSelectedRecipe}
        />
        {this.state.selectedRecipe && (
          <Modal title={this.state.selectedRecipe.name} close={this.closeModal}>
            <Recipe recipe={this.state.selectedRecipe} />
          </Modal>
        )}
      </div>
    );
  }
}

export default RecipesPage;
