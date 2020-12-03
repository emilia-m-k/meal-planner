import React, { Component } from "react";

export class Checkbox extends Component {
  render() {
    return (
      <label
        className="mdl-checkbox mdl-js-checkbox"
        htmlFor={"checkbox-" + this.props.id}
        onClick={(e) => e.stopPropagation()}
        id="test"
      >
        <input
          type="checkbox"
          id={"checkbox-" + this.props.id}
          className="mdl-checkbox__input"
          checked={this.props.model}
          onChange={this.props.onChange}
        />
        <span className="mdl-checkbox__label">{this.props.label}</span>
      </label>
    );
  }
}

export class IconButton extends Component {
  render() {
    let cssClass = "mdl-button mdl-js-button mdl-button--icon";
    cssClass += this.props.colored ? " mdl-button--colored" : " default";
    return (
      <button className={cssClass} onClick={this.props.onClick}>
        <i className="material-icons">{this.props.icon}</i>
      </button>
    );
  }
}

export class Modal extends Component {
  render() {
    return (
      <div className="modal-backdrop" onClick={this.props.close}>
        <div
          className="modal mdl-shadow--2dp"
          // onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__header">
            <div className="modal__title">{this.props.title}</div>
            <IconButton icon="close" onClick={this.props.close}></IconButton>
          </div>
          <div className="modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Ingredients extends Component {
  render() {
    return (
      <div className="recipe-ingredients" style={{ flexFlow: this.props.flow }}>
        {this.props.ingredients.map((i, index) => (
          <span key={index} className="ingredient">
            {i.name} {i.quantity} {i.unit}
          </span>
        ))}
      </div>
    );
  }
}

export class Tags extends Component {
  render() {
    return (
      <div className="recipe-tags">
        {this.props.tags.map((t, index) => (
          <span key={index} className="tag">
            {t}
          </span>
        ))}
      </div>
    );
  }
}

export class RecipeImg extends Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <div className="">
        {this.props.recipe.img ? (
          <img
            className="recipe__thumbnail"
            src={recipe.img}
            alt={`Photograph of ${recipe.name}`}
          />
        ) : (
          <span className="material-icons">local_dining</span>
        )}
      </div>
    );
  }
}
