import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeData } from 'src/app/data/recipe-data';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  public bookmarked:RecipeData[] = [];

  constructor(public recipeService:RecipeService) { }

  ngOnInit() {
    this.bookmarked = this.recipeService.getAllSavedRecipes();
  }

}
