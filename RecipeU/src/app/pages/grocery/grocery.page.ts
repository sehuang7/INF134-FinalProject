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

  constructor(public recipeService:RecipeService) { }

  ngOnInit() {
    this.allItems = this.recipeService.getAllItems();
  }

}
