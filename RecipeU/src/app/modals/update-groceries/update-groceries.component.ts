import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemData } from 'src/app/data/item-data';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-update-groceries',
  templateUrl: './update-groceries.component.html',
  styleUrls: ['./update-groceries.component.scss'],
})
export class UpdateGroceriesComponent implements OnInit{

  name: string = "";

  @Input() item: any;

  item_name: string = "";
  type: string = "";
  quantity: number = 1; 
  unit: string = "ct";

  constructor(private modalCtrl: ModalController, private recipeService: RecipeService) {}

  ngOnInit() {
    console.log(this.item);
    
    this.item_name = this.item.name;
    this.quantity = Number(this.item.quantity);
    this.unit = this.item.unit;

    if (this.item.type === 'Fridge Item') {
      this.type = "Fridge";
    }
    else {
      this.type = "Pantry";
    }

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  updateItem() {
    this.item.name = this.item_name;
    this.item.quantity = this.quantity;
    this.item.unit = this.unit;

    if (this.type === "Fridge") {
      this.item.type = "Fridge Item";
    }
    else {
      this.item.type = "Pantry/Cabinet Item";
    }

    this.cancel();
  }

  deleteItem() {
    this.recipeService.removeItem(this.item);
    this.cancel();
  }

  incrementQuantity() {
    this.quantity += 1;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
