export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  host: process.env.DB_HOST,
  dbport: +process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USERNAME,
  dbPass: process.env.DB_PASSWORD,
  cloudinaryName: process.env.CLOUD_NAME,
  cloudinaryKey: process.env.CLOUD_KEY,
  cloudinarySecret: process.env.CLOUD_SECRET,
  jwtSecret: process.env.JWT_SECRET,
});
