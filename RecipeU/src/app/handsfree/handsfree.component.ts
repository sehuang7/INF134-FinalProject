import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-handsfree',
  templateUrl: './handsfree.component.html',
  styleUrls: ['./handsfree.component.scss'],
})
export class HandsfreeComponent  implements OnInit {

  @Input() recipeData: any; // Add this line to accept recipeData

  currentStepIndex: number = 0;
  isVolumeActive: boolean = false; // Track the volume icon state
  volumeIcon: string = 'volume-high-outline'; // Default icon name
  

  constructor(private modalController: ModalController) { 
    
  }

  ngOnInit() {
    console.log(this.recipeData);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  nextStep() {
    if (this.currentStepIndex < this.recipeData.instructions.length - 1) {
      this.currentStepIndex++;
    }
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  toggleVolume() {
    this.isVolumeActive = !this.isVolumeActive;
    if (this.isVolumeActive) {
      this.volumeIcon = 'volume-high';
      // You can add logic here to actually handle the volume action
    } else {
      this.volumeIcon = 'volume-high-outline';
    }
  } 


}
