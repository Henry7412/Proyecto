import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experiences } from 'src/Shared/Schemas/Experiences.schema';
import { Content } from 'src/app.entity';

@Injectable()
export class AppService {
  constructor(@InjectModel(Experiences.name) private experiencesModel: Model<Experiences>) {}

  async storeExperiences(request: any) {
    const newEntity = new this.experiencesModel(request);
    return await newEntity.save();
  }

  private contents: Content[] = [];
  private idCounter = 1;

  create(content: Content): Content {
    content.id = this.idCounter++;
    this.contents.push(content);
    return content;
  }

  findAll(page: number, pageSize: number, filters: any): Content[] {
    let filteredContents = this.contents;

    if (filters.title) {
      filteredContents = filteredContents.filter(content => content.categoria.includes(filters.title));
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredContents.slice(start, end);
  }

  update(id: number, updatedContent: Partial<Content>): Content {
    const contentIndex = this.contents.findIndex(content => content.id === id);
    if (contentIndex === -1) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }
    const content = this.contents[contentIndex];
    this.contents[contentIndex] = { ...content, ...updatedContent, id };
    return this.contents[contentIndex];
  }

  delete(id: number): boolean {
    const contentIndex = this.contents.findIndex(content => content.id === id);
    if (contentIndex === -1) {
      return false;
    }
    this.contents.splice(contentIndex, 1);
    return true;
  }
}


