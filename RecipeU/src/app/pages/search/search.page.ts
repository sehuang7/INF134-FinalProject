import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public categories:string[] = [];

  constructor(public recipeService:RecipeService) { }

  ngOnInit() {
    this.categories = this.recipeService.getAllCategories();
  }

}
