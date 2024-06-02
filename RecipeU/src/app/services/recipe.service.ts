import { Injectable } from '@angular/core';
import { RecipeData } from '../data/recipe-data';
import { ItemData } from '../data/item-data';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public static AllRecipeData:RecipeData[] = [];
  public static AllItemData:ItemData[] = [];

  constructor() { 


  }

  private addDefaultRecipeData() {
    // Here parse a json file containing all recipes
  }

  private addDefaultItemData() {
    // Here parse a json file containing all items
  }

}
