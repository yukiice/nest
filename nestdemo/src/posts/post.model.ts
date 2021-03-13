import { prop, getModelForClass } from '@typegoose/typegoose';
export class PostClass {
  @prop()
  title: string;
  @prop()
  content: string;
}

export const PostModel = getModelForClass(PostClass);
