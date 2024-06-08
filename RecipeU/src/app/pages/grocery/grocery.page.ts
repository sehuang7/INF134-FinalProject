import { Component, OnInit } from '@angular/core';
import { ItemData } from 'src/app/data/item-data';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  public allItems:ItemData[] = [];
  public fridgeItems: ItemData[] = []
  public pantryItems: ItemData[] = [];

  constructor(public recipeService:RecipeService) { 

  }

  ngOnInit() {
    this.allItems = this.recipeService.getAllItems();
   
    // this.fridgeItems = this.allItems.filter(item => item.type === 'Fridge Item');
    // this.pantryItems = this.allItems.filter(item => item.type === 'Pantry/Cabinet Item');
    console.log(this.allItems);
    console.log(this.fridgeItems);
  }

}
