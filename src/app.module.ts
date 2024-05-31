import { Module } from '@nestjs/common';

import { AppService } from './Application/Experience/Infrastructure/Services/app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Experiences, ExperiencesSchema } from './Shared/Schemas/Experiences.schema';
import { ExperiencesStoreController } from './Application/Experience/Infrastructure/Controllers/ExperiencesStore.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Henry:120720@cluster0.jlqjufy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            MongooseModule.forFeature([{ name: Experiences.name, schema: ExperiencesSchema }])],
  controllers: [ExperiencesStoreController],
  providers: [AppService],
  
})
export class AppModule {}
