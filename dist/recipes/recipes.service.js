"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const recipes_schemas_1 = require("./schemas/recipes.schemas");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RecipesService = class RecipesService {
    constructor(recipesModule) {
        this.recipesModule = recipesModule;
    }
    async getAll() {
        return this.recipesModule.find().exec();
    }
    async getRecipe(recipeFilter) {
        return this.recipesModule.findOne(recipeFilter);
    }
    async getRecipesByIngredient(ingredients) {
        return await this.recipesModule.find({ ingredients: { $all: ingredients } });
    }
    async createRecipe(newRecipe) {
        try {
            const recipe = new this.recipesModule(newRecipe);
            return await recipe.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async updateRecipe(recipeName, recipeDto) {
        return await this.recipesModule.findOneAndUpdate({ name: recipeName }, { cookingTime: recipeDto.cookingTime });
    }
};
RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(recipes_schemas_1.Recipe.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecipesService);
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map