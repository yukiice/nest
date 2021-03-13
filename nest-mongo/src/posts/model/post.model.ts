import { prop } from '@typegoose/typegoose';
export class Post {
  @prop({required:true})
  title: string;
  @prop({required:true})
  content: string;
}
