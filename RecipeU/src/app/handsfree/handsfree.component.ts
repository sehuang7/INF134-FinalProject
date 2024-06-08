import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-handsfree',
  templateUrl: './handsfree.component.html',
  styleUrls: ['./handsfree.component.scss'],
})
export class HandsfreeComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
