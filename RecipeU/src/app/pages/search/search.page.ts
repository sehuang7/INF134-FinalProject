import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ModalController } from '@ionic/angular';
import { RecipeData } from 'src/app/data/recipe-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public categories:string[] = [];
  public categoriesImages: string[] = ["https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Prawn-harissa-spaghetti--b3b0fdd.jpg?quality=90&resize=556,505", 
    "https://realfood.tesco.com/media/images/Veggie-rice-bowl-1400x919-mini-ba621247-21ff-419b-9604-3a27a255b90b-0-1400x919.jpg",
    "https://www.foodandwine.com/thmb/OdEOD2fXuWknRaPksG90KTUDiJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Brie-Cheese-Quiche-FT-RECIPE1223-042b0266b6214e82bb755a30530e5b86.jpg",
    "https://spicysouthernkitchen.com/wp-content/uploads/tofu-13.jpg", "https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg",
    "https://www.bhg.com/thmb/o3xhK7m47y_mJU4igtWto9pzenc=/1244x0/filters:no_upscale():strip_icc()/pan-seared-salmon-tomato-pesto-RU233499-573087205ee74d19a20b3a9c1e1366bc.jpg"
    ]
  public recipes:RecipeData[] =[];

  constructor(public recipeService:RecipeService, private router:Router, private modalController:ModalController) { }

  ngOnInit() {
    this.categories = this.recipeService.getAllCategories();
    this.recipes = this.recipeService.getAllRecipes();
  }

  public openRecipe() {
    this.router.navigate(['/recipe-details', 1]);
  }

}
