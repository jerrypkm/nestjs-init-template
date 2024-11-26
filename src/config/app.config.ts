export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  host: process.env.PGHOST,
  dbport: +process.env.PGPORT,
  dbName: process.env.PGDATABASE,
  dbUser: process.env.PGUSERNAME,
  dbPass: process.env.PGPASSWORD,
  cloudinaryName: process.env.CLOUD_NAME,
  cloudinaryKey: process.env.CLOUD_KEY,
  cloudinarySecret: process.env.CLOUD_SECRET,
  jwtSecret: process.env.JWT_SECRET,
});
