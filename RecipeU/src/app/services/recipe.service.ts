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



  constructor() {
    console.log("hi");
    this.addDefaultRecipeData();
    this.addDefaultItemData();

  }

  private addDefaultRecipeData() {
    // Here parse a json file containing all recipes --> recipes.json
    fetch('./assets/recipes.json').then(res => res.json()).then(json => {
      console.log('results::', json);

      json.forEach((recipe: any, index: number) => {
        var temp = new RecipeData(recipe.title, recipe.image, recipe.prep_time, recipe.cook_time, recipe.rating, recipe.ingredients, recipe.instructions);
        RecipeService.AllRecipeData.push(temp);

        console.log(RecipeService.AllRecipeData);
      });

    })
  }

  private addDefaultItemData() {
    // Here parse a json file containing all items --> items.json
    fetch('./assets/items.json').then(res => res.json()).then(json => {
      console.log('results::', json);

      json.forEach((item: any, index: number) => {
        var temp = new ItemData(item.name, item.image, item.quantity, item.unit[0], item.type[0]);
        console.log(temp);
        RecipeService.AllItemData.push(temp);
        console.log(RecipeService.AllItemData);
      });

    })
  }

  public getAllItems() {
    return RecipeService.AllItemData;
  }

  public getAllRecipes() {
    return RecipeService.AllRecipeData;
  }

}
