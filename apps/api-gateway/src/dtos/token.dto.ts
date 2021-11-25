import { ObjectId } from 'mongoose';

export class TokenDto {
    _id: ObjectId;
    name: string;
    username: string;
    role: string;
    companyId: string;
    access_token: string
}
