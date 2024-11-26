import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
import { ConfigService } from '@nestjs/config';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): ConfigOptions => {
    return v2.config({
      cloud_name: configService.getOrThrow('cloudinaryName'),
      api_key: configService.getOrThrow('cloudinaryKey'),
      api_secret: configService.getOrThrow('cloudinarySecret'),
    });
  },
};
