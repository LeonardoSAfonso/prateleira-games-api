
module.exports = {
  type: 'sqlite',
  database: './src/shared/infra/typeorm/database/prateleira.db',
  logging: false,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATION],
  extra: {
    ssl: { rejectUnauthorized: false }
  },
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATION_DIR,
  },
};
