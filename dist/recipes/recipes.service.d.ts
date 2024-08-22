/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Recipe, RecipeDocument } from './schemas/recipes.schemas';
import { Model } from 'mongoose';
import { RecipeDto } from './dto/recipe.dto';
import { RecipeFilterDto } from './dto/recipe-filter.dto';
export declare class RecipesService {
    private readonly recipesModule;
    constructor(recipesModule: Model<RecipeDocument>);
    getAll(): Promise<Recipe[]>;
    getRecipe(recipeFilter: RecipeFilterDto): Promise<Recipe>;
    getRecipesByIngredient(ingredients: string[]): Promise<(import("mongoose").Document<unknown, any, Recipe> & Omit<Recipe & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createRecipe(newRecipe: RecipeDto): Promise<Recipe>;
    updateRecipe(recipeName: string, recipeDto: RecipeDto): Promise<import("mongoose").Document<unknown, any, Recipe> & Omit<Recipe & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
