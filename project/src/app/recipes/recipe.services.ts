import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.services';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeServices {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schintzel',
      'A Super Tasty Schintzel - Just Awesome',
      'https://img.freepik.com/free-photo/homemade-breaded-weiner-schnitzel-with-potato-chips-fried-chicken-with-french-fries-european-food-style_1339-162402.jpg?w=996',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://img.livestrong.com/630x/cme-data/getty%2F8e1b43a8bf094e1b9c00d5dfb96c46b0.jpg?type=webp',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  addIngredientToShoppinglist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
