import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) { }

  async create(user: User): Promise<any> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }
}
