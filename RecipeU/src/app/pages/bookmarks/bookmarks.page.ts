import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeData } from 'src/app/data/recipe-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  public bookmarked:RecipeData[] = [];

  constructor(public recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.bookmarked = RecipeService.SavedRecipes;
  }

  openRecipeDetails(id: string) {
    this.router.navigate(['/recipe-details', id]);
  }

}
