import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperiencesDocument = HydratedDocument<Experiences>;

@Schema()
export class Experiences {
  @Prop()
  name: string;
}

export const ExperiencesSchema = SchemaFactory.createForClass(Experiences);