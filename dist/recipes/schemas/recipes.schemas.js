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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSchema = exports.Recipe = exports.RecipeDifficultyEnum = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var RecipeDifficultyEnum;
(function (RecipeDifficultyEnum) {
    RecipeDifficultyEnum["easy"] = "Easy";
    RecipeDifficultyEnum["medium"] = "Medium";
    RecipeDifficultyEnum["hard"] = "Master Chef";
})(RecipeDifficultyEnum = exports.RecipeDifficultyEnum || (exports.RecipeDifficultyEnum = {}));
let Recipe = class Recipe {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: true, index: true }),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, index: true }),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: RecipeDifficultyEnum }),
    __metadata("design:type", String)
], Recipe.prototype, "difficulty", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Recipe.prototype, "cookingTime", void 0);
Recipe = __decorate([
    (0, mongoose_1.Schema)({ collection: 'recipes', timestamps: true })
], Recipe);
exports.Recipe = Recipe;
exports.RecipeSchema = mongoose_1.SchemaFactory.createForClass(Recipe);
//# sourceMappingURL=recipes.schemas.js.map