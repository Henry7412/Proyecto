import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experiences } from 'src/Shared/Schemas/Experiences.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Experiences.name) private experiencesModel: Model<Experiences>) {}
  async storeExperiences(request:any) {
    const newEntity= new this.experiencesModel(request)
    return await newEntity.save();
  }
}
