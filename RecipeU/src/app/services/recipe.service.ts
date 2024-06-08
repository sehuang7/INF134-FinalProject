import { Injectable } from '@angular/core';
import { RecipeData } from '../data/recipe-data';
import { ItemData } from '../data/item-data';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public static AllRecipeData: RecipeData[] = [];
  public static AllItemData: ItemData[] = [];
  public static SavedRecipes: RecipeData[] = [];

  
  public static Categories: string[] = ["Quick and Easy", "Vegetarian", "New Recipes", "Asian Foods", "Community Favorites", "Fancy Foods"];

  constructor() {
    this.addDefaultRecipeData();
    this.addDefaultItemData();
    this.addDefaultSavedRecipes();

  }

  private addDefaultRecipeData() {
    // Here parse a json file containing all recipes --> recipes.json
    fetch('./assets/recipes.json').then(res => res.json()).then(json => {

      json.forEach((recipe: any, index: number) => {
        var temp = new RecipeData(recipe.id,recipe.title, recipe.image, recipe.prep_time, recipe.cook_time, recipe.rating, recipe.ingredients, recipe.instructions);
        RecipeService.AllRecipeData.push(temp);
      });

    })
  }

  private addDefaultItemData() {
    // Here parse a json file containing all items --> items.json
    fetch('./assets/items.json').then(res => res.json()).then(json => {

      json.forEach((item: any, index: number) => {
        var temp = new ItemData(item.name, item.image, item.quantity, item.unit[0], item.type[0]);
        RecipeService.AllItemData.push(temp);

      });

    })
  }

  private addDefaultSavedRecipes() {
    fetch('./assets/recipes.json').then(res => res.json()).then(json => {

      json.forEach((recipe: any, index: number) => {
        var temp = new RecipeData(recipe.id,recipe.title, recipe.image, recipe.prep_time, recipe.cook_time, recipe.rating, recipe.ingredients, recipe.instructions);
        RecipeService.SavedRecipes.push(temp);
      });

    })
  }

  getRecipeById(id: string): RecipeData {
    return RecipeService.AllRecipeData.find(recipe => recipe.id === id) as RecipeData;
  }

  public addSavedRecipe() {

  }

  public getAllItems() {
    return RecipeService.AllItemData;
  }

  public getAllRecipes() {
    return RecipeService.AllRecipeData;
  }

  public getAllCategories() {
    return RecipeService.Categories;
  }

  public getAllSavedRecipes() {
    return RecipeService.SavedRecipes;
  }

}
