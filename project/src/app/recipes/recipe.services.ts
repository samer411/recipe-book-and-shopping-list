import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeServices {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test',
      'tessst',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'
    ),
    new Recipe(
      'test2',
      'tessst',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
