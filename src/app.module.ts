import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module'; // Correct path
import { Item } from './items/items.entity'; // Correct path
import { AuthModule } from './auth/auth.module'; // Added import for AuthModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'yourUsername',
      password: 'yourPassword',
      database: 'yourDatabase',
      entities: [Item],
      synchronize: true,
    }),
    ItemsModule,
    AuthModule, // Added AuthModule to imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
