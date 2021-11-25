import { Date, ObjectId } from 'mongoose';

export class VacancyDto {
  readonly _id: ObjectId;
  readonly companyId: ObjectId;
  readonly title: string;
  readonly description: string;
  readonly expiredAt: Date;
}
