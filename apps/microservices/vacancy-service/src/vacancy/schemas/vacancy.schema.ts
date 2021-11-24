import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, ObjectId } from 'mongoose';

export type VacancyDocument = Vacancy & Document;

@Schema()
export class Vacancy extends Document {

  @Prop()
  companyId: ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  expiredAt: Date;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
