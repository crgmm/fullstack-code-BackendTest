import { Recipe, RecipeDocument } from './schemas/recipes.schemas';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeFilterDto } from './dto/recipe-filter.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipesModule: Model<RecipeDocument>,
  ) {}

  async getAll(): Promise<Recipe[]> {
    return this.recipesModule.find().exec();
  }

  async getRecipe(recipeFilter: RecipeFilterDto): Promise<Recipe> {
    return this.recipesModule.findOne(recipeFilter);
  }

  async getRecipesByIngredient(ingredients: string[]) {
    return await this.recipesModule.find({ ingredients: { $all: ingredients } });
  }

  async createRecipe(newRecipe: RecipeDto): Promise<Recipe> {
    try {
      const recipe = new this.recipesModule(newRecipe);
      return await recipe.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateRecipe(recipeName: string, recipeDto: RecipeDto) {
    return await this.recipesModule.findOneAndUpdate({name: recipeName}, { cookingTime: recipeDto.cookingTime });
  }
}
