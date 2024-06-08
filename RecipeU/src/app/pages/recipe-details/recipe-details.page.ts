// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-recipe-details',
//   templateUrl: './recipe-details.page.html',
//   styleUrls: ['./recipe-details.page.scss'],
// })
// export class RecipeDetailsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HandsfreeComponent } from 'src/app/handsfree/handsfree.component';
import { RecipeService } from '../../services/recipe.service';
import { RecipeData } from '../../data/recipe-data';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  public recipe!: RecipeData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('id'); // Get the recipe ID from the route
    this.recipe = this.recipeService.getRecipeById(recipeId as string); // Fetch the recipe details using the ID
  }
  
  goHome() {
    this.router.navigate(['/']); // Navigate to home page
  }

  async openHandsFreeMode(event: any) {
    if (event.detail.checked) {
      const modal = await this.modalController.create({
        component: HandsfreeComponent
      });
      return await modal.present();
    }
  }

}