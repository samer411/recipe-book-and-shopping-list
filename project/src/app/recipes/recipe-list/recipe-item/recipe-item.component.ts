import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServices } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeServices) {}

  ngOnInit(): void {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
