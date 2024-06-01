import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperiencesDocument = HydratedDocument<Experiences>;

@Schema()
export class Experiences {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ required: true })
  estado: string;

  @Prop()
  relaciones: string;
}

export const ExperiencesSchema = SchemaFactory.createForClass(Experiences);

