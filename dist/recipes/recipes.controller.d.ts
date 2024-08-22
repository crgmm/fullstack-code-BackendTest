import { RecipesService } from './recipes.service';
import { Recipe } from './schemas/recipes.schemas';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeFilterDto } from './dto/recipe-filter.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    getAllRecipes(): Promise<Recipe[]>;
    getRecipes(ingredients: string[]): Promise<Recipe[]>;
    getRecipe(recipeFilter: RecipeFilterDto): Promise<Recipe>;
    createRecipe(newRecipe: RecipeDto): Promise<Recipe>;
    updateRecipe(recipeName: string, recipeDto: RecipeDto): Promise<Recipe>;
}
