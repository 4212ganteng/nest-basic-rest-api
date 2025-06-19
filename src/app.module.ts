import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ValidationService } from './validation/validation.service';

@Module({
  imports: [CommonModule],
  controllers: [],
  providers: [ValidationService],
})
export class AppModule {}
