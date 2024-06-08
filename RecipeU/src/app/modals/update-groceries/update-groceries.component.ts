import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-groceries',
  templateUrl: './update-groceries.component.html',
  styleUrls: ['./update-groceries.component.scss'],
})
export class UpdateGroceriesComponent {

  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
