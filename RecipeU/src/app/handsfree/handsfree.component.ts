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
  additionalCardTitle: string = 'Perform Gesture'; // Title for the new card
  pressedButton: string = ''; // Track which button is pressed
  ingredientChecklist: string[][] = [[],
                                     ['Pancetta'],
                                     ['Eggs','Black Pepper'],
                                     ['Spaghetti'],
                                     ['Garlic'],
                                     ['Butter', 'Chopped Pancetta', 'Squashed Garlic'],
                                     [],
                                     [],
                                     ['Cup of Pasta Water', 'Spaghetti'],
                                     ['Cheese', 'Eggs'],
                                     ['Mixed Eggs and Cheese'],
                                     ['Pasta Water'],
                                     ['Cheese (optional)', 'Black Pepper (optional)']]
  

  constructor(private modalController: ModalController) { 
    
  }

  ngOnInit() {
    console.log(this.recipeData);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  get progress(): number {
    return (this.currentStepIndex + 1) / this.recipeData.instructions.length;
  }

  // Method to display ingredients for the current step
  hasOptionsForCurrentStep(): boolean {
      return this.ingredientChecklist[this.currentStepIndex] && this.ingredientChecklist[this.currentStepIndex].length > 0;
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

  handleAction(action: string) {
    this.pressedButton = action;
    this.additionalCardTitle = `${action} Gesture Recognized!`;
    if (action === 'Previous') {
      this.previousStep();
    } else if (action === 'Next') {
      this.nextStep();
    }
  }

  resetButtonPress() {
    setTimeout(() => {
      this.pressedButton = '';
    }, 1000); // Reset the button press state after 1 second
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
