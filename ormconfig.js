

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATION],
  extra: {
    ssl: { rejectUnauthorized: false }
  },
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATION_DIR,
  },
};
