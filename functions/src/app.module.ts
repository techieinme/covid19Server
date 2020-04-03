import { Module } from '@nestjs/common';
import { DemoController } from './demo/demo';
import { ContactsService } from './demo/demo.service';
@Module({
  controllers: [DemoController],
  providers: [ContactsService],
})
export class AppModule {}
