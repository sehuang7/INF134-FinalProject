import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipeService } from 'src/app/services/recipe.service';
import { ItemData } from 'src/app/data/item-data';

@Component({
  selector: 'app-add-groceries',
  templateUrl: './add-groceries.component.html',
  styleUrls: ['./add-groceries.component.scss'],
})
export class AddGroceriesComponent {

  name: string = "";
  
  item_name: string = "";
  type: 'Fridge' | 'Pantry' = 'Fridge';
  quantity: number = 1; 
  unit: string = "ct";

  constructor(private modalCtrl: ModalController, private recipeService: RecipeService) {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  incrementQuantity() {
    this.quantity += 1;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  addItem() {
    var tempType;
    var tempUnit;

    if (this.type === 'Fridge') {
      tempType = 0;
    }
    else {
      tempType = 1;
    }

    if (this.unit === 'oz') {
      tempUnit = 0;
    }
    else if (this.unit === 'lbs') {
      tempUnit = 1;
    } 
    else {
      tempUnit = 2;
    }

    const imageElement = document.getElementById('uploadedImage') as HTMLImageElement;
    const image = imageElement ? imageElement.src : 'https://ionicframework.com/docs/img/demos/card-media.png';
    
    var item = new ItemData(this.item_name, image, this.quantity, tempUnit, tempType);
    console.log(item);

    this.recipeService.addItem(item);
    this.cancel();

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = document.getElementById('uploadedImage') as HTMLImageElement;
        image.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

}

