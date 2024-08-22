import { RecipesService } from './recipes.service';
import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Recipe } from './schemas/recipes.schemas';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeFilterDto } from './dto/recipe-filter.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipesService.getAll();
  }

  @Get('ingredients')
  async getRecipes(@Query('ingredients') ingredients: string[]): Promise<Recipe[]> {
    return this.recipesService.getRecipesByIngredient(ingredients);
  }

  @Get('recipe')
  async getRecipe(@Query() recipeFilter: RecipeFilterDto): Promise<Recipe> {
    return this.recipesService.getRecipe(recipeFilter);
  }

  @Post()
  async createRecipe(@Body() newRecipe: RecipeDto): Promise<Recipe> {
    return this.recipesService.createRecipe(newRecipe);
  }

  @Patch(':name')
  async updateRecipe(@Param('name') recipeName: string, @Body() recipeDto: RecipeDto): Promise<Recipe> {
    return await this.recipesService.updateRecipe(recipeName, recipeDto);
  }
}
