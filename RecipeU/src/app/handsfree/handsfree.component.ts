import { Component, OnInit, Input } from '@angular/core';
import { ModalController, RangeCustomEvent } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-handsfree',
  templateUrl: './handsfree.component.html',
  styleUrls: ['./handsfree.component.scss'],
})
export class HandsfreeComponent  implements OnInit {

  @Input() recipeData: any; // Add this line to accept recipeData

  currentStepIndex: number = 0;
  volume: number = 1; // Default volume
  speed: number = 1; // Default speed
  showControls: boolean = true; // State to show/hide controls
  currentUtterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(''); // To keep track of the current utterance


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
    this.readCurrentStep();
    console.log('text was spoken');
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
      this.readCurrentStep();
      this.resetButtonPress();
    }
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.readCurrentStep();
      this.resetButtonPress();
    }
  }

  handleAction(action: string) {
    this.pressedButton = action;
    if (action === 'Previous') {
      this.additionalCardTitle = `${action} Gesture Recognized!`;
      this.previousStep();
    } 
    else if (action === 'Next') {
      this.additionalCardTitle = `${action} Gesture Recognized!`;
      this.nextStep();
    } 
    else if (action == 'Repeat') {
      this.additionalCardTitle = `${action} Gesture Recognized!`;
      this.repeatCurrentStep();
    } 
    else if (action == 'Stop') {
      this.additionalCardTitle = `${action} Gesture Recognized!`;
      this.stopSpeech();
    } 
    else if (action == 'VolumeUp') {
      this.additionalCardTitle = `Volume Up Gesture Recognized! Volume is ${this.volume+1}`;
      this.updateVolume(this.volume+1);
    } 
    else if (action == 'VolumeDown') {
      this.additionalCardTitle = `Volume Down Gesture Recognized! Volume is ${this.volume-1}`;
      this.updateVolume(this.volume-1);
    } 
    else if (action == 'SpeedUp') {
      this.additionalCardTitle = `Speed Up Gesture Recognized! Speed is ${this.speed+0.2}`;
      this.updateSpeed(this.speed+0.2);
    } 
    else if (action == 'SpeedDown') {
      this.additionalCardTitle = `Speed Down Gesture Recognized! Speed is ${this.speed-0.2}`;
      this.updateSpeed(this.speed-0.2)
    }
  }

  resetButtonPress() {
    setTimeout(() => {
      this.pressedButton = '';
    }, 1000); // Reset the button press state after 1 second
  }

  speakText(text:string) {
    if('speechSynthesis' in window) {
      if (this.currentUtterance.text != '') {
        window.speechSynthesis.cancel(); // Stop any ongoing speech
      }
      this.currentUtterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance.volume = this.volume; // Set volume
      this.currentUtterance.rate = this.speed; // Set speed
      window.speechSynthesis.speak(this.currentUtterance);
    } else {
      console.error('Text-to-Speech is not supported in your browser.');
    }
  }

    // Method to read the current step and its ingredients
  readCurrentStep() {
        const instructions = this.recipeData.instructions[this.currentStepIndex];
        var ingredients = ''
        if (this.hasOptionsForCurrentStep()) {
          ingredients = this.ingredientChecklist[this.currentStepIndex].join(', ');
        } else {
          ingredients = 'None'
        }
        const textToRead = `Step ${this.currentStepIndex + 1}: Ingredients Needed: ${ingredients}. Instructions: ${instructions}.`;
        this.speakText(textToRead); 
  }
  
    // Method to repeat the current step's text
  repeatCurrentStep() {
      this.readCurrentStep();
  }

  toggleControls() {
    this.showControls = !this.showControls;
  }

    // Stop the current speech
  stopSpeech() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        this.currentUtterance = new SpeechSynthesisUtterance(''); // Reset currentUtterance
      }
  }

    // Update speech settings in real-time
    updateVolume(ev: Event | number) {
      if (typeof ev == 'number') {
        this.volume = ev;
      } else {
        const value = (ev as RangeCustomEvent).detail.value as number
        this.volume = value;
      }
      if (this.currentUtterance.text != '') {
        this.currentUtterance.volume = this.volume;
      }
    }
  
    updateSpeed(ev: Event | number) {
      if (typeof ev == 'number') {
        this.speed = ev
      } else {
        const value = (ev as RangeCustomEvent).detail.value as number
        this.speed = value;
      }
      if (this.currentUtterance.text != '') {
        this.currentUtterance.rate = this.speed;
      }
    }

}
