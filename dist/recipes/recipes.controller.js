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
exports.RecipesController = void 0;
const recipes_service_1 = require("./recipes.service");
const common_1 = require("@nestjs/common");
const recipe_dto_1 = require("./dto/recipe.dto");
const recipe_filter_dto_1 = require("./dto/recipe-filter.dto");
let RecipesController = class RecipesController {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    async getAllRecipes() {
        return this.recipesService.getAll();
    }
    async getRecipes(ingredients) {
        return this.recipesService.getRecipesByIngredient(ingredients);
    }
    async getRecipe(recipeFilter) {
        return this.recipesService.getRecipe(recipeFilter);
    }
    async createRecipe(newRecipe) {
        return this.recipesService.createRecipe(newRecipe);
    }
    async updateRecipe(recipeName, recipeDto) {
        return await this.recipesService.updateRecipe(recipeName, recipeDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getAllRecipes", null);
__decorate([
    (0, common_1.Get)('ingredients'),
    __param(0, (0, common_1.Query)('ingredients')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getRecipes", null);
__decorate([
    (0, common_1.Get)('recipe'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_filter_dto_1.RecipeFilterDto]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "getRecipe", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_dto_1.RecipeDto]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "createRecipe", null);
__decorate([
    (0, common_1.Patch)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, recipe_dto_1.RecipeDto]),
    __metadata("design:returntype", Promise)
], RecipesController.prototype, "updateRecipe", null);
RecipesController = __decorate([
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipesController);
exports.RecipesController = RecipesController;
//# sourceMappingURL=recipes.controller.js.map