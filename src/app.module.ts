import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { FilesModule } from './files/files.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthModule } from './auth/auth.module';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: +process.env.PGPORT,
      database: process.env.PGDATABASE,
      username: process.env.PGUSERNAME,
      password: process.env.PGPASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
    FilesModule,
    CloudinaryModule,
    AuthModule,
  ],
})
export class AppModule {}
