import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../Services/app.service';


@Controller()
export class ExperiencesStoreController {
  constructor(private readonly appService: AppService) {}

  @Post("/digital-guide/content")
  async __invoke(@Body() request: any) {
    return await  this.appService.storeExperiences(request);
    
  }
}
