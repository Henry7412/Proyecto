import { Controller, Post, Body, Get, Query, Put, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { Content } from 'src/app.entity';
import { AppService } from '../Services/app.service';

@Controller()
export class ExperiencesStoreController {
  constructor(private readonly appService: AppService) {}

  @Post("/digital-guide/content")
  async __invoke(@Body() request: any) {
    if (!request.name || !request.categoria || !request.estado) {
      throw new BadRequestException('Missing required fields: name, categoria, estado');
    }
    return await this.appService.storeExperiences(request);
  }

  @Get("/digital-guides")
  findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Query() filters: any,
  ): Content[] {
    return this.appService.findAll(page, pageSize, filters);
  }

  @Put("/digital-guide/content/:id")
  update(@Param('id') id: number, @Body() content: Partial<Content>): Content {
    const updatedContent = this.appService.update(id, content);
    if (!updatedContent) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }
    return updatedContent;
  }

  @Delete("/digital-guide/content/id")
  delete(@Param('id') id: number): void {
    const deleted = this.appService.delete(1);
    if (!deleted) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }
  }
}

