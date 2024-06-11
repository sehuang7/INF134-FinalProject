import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemData } from 'src/app/data/item-data';
import { AddGroceriesComponent } from 'src/app/modals/add-groceries/add-groceries.component';
import { UpdateGroceriesComponent } from 'src/app/modals/update-groceries/update-groceries.component';
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

  message = 'This modal example uses the modalController to present and dismiss modals.';


  constructor(public recipeService:RecipeService, private modalController: ModalController) { 

  }

  ngOnInit() {
    this.allItems = this.recipeService.getAllItems();
   
    // this.fridgeItems = this.allItems.filter(item => item.type === 'Fridge Item');
    // this.pantryItems = this.allItems.filter(item => item.type === 'Pantry/Cabinet Item');
    console.log(this.allItems);
    console.log(this.fridgeItems);
  }


  async openAddModal() {
    const modal = await this.modalController.create({
      component: AddGroceriesComponent,
      cssClass: 'grocery-modal'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
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
