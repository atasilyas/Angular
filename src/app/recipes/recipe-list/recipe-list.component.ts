import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()  recipeWasSelected =  new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('ilyas', 'atas', 'https://tineye.com/images/widgets/mona.jpg'),
    new Recipe('test', 'test', 'https://tineye.com/images/widgets/mona.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
