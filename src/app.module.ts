import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemService } from './services/item/item.service';
import { ItemController } from './controllers/item/item.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
