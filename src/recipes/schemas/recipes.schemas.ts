import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

export enum RecipeDifficultyEnum {
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Master Chef',
}

@Schema({ collection: 'recipes', timestamps: true })
export class Recipe {
  @Prop({ type: String, unique: true, index: true })
  name: string;

  @Prop({ type: Array, index: true })
  ingredients: string[];

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, enum: RecipeDifficultyEnum })
  difficulty: string;

  @Prop({ type: Number })
  cookingTime: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
