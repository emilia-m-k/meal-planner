import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
// import "./App.scss";

import DashboardPage from "./pages/DashboardPage";
import RecipesPage from "./pages/RecipesPage";
import SearchPage from "./pages/SearchPage";
import PlannerPage from "./pages/PlannerPage";
import RecipeCard from "./RecipeCard";

const App = () => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title ">MealPlanner</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="/">
            Dashboard
          </a>
          <a className="mdl-navigation__link" href="/recipes">
            Recipes
          </a>
          <a className="mdl-navigation__link" href="/search">
            Search
          </a>
          <a className="mdl-navigation__link" href="/planner">
            Planner
          </a>
        </nav>
      </div>
      <main className="mdl-layout__content">
        <div className="page-content">
          <Router>
            <DashboardPage path="/" />
            <RecipesPage path="/recipes" />
            <PlannerPage path="/planner" />
            <SearchPage path="/search" />
            <RecipeCard path="/recipe/:id" />
          </Router>
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
