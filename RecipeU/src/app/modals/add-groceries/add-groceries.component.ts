import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-groceries',
  templateUrl: './add-groceries.component.html',
  styleUrls: ['./add-groceries.component.scss'],
})
export class AddGroceriesComponent {

  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
