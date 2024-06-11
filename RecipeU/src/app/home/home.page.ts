import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { ItemData } from '../data/item-data';
import { RecipeData } from '../data/recipe-data';
import { ModalController } from '@ionic/angular';
import { UpdateGroceriesComponent } from '../modals/update-groceries/update-groceries.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public lowInStock:ItemData[] = [];
  public recipes:RecipeData[] = [];

  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(public recipeService:RecipeService, private router:Router, private modalController:ModalController) {
    
  }

  ngOnInit() {
      this.lowInStock = this.recipeService.getAllItems();
      this.recipes = this.recipeService.getAllRecipes();
  }
  
  openRecipeDetails(id: string) {
    this.router.navigate(['/recipe-details', id]);
  }

  async openUpdateModal(item: ItemData) {
    const modal = await this.modalController.create({
      component: UpdateGroceriesComponent,
      cssClass: 'grocery-modal',
      componentProps: {item: item}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

}
