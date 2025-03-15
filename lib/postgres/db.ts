import pgp from 'pg-promise';

const CONNECTION_STRING = process.env.DATABASE_URL ?? ""

// Use the global object to store the database instance
const globalForDb = global as typeof global & { helpers?: pgp.IHelpers, db?: pgp.IDatabase<object> };

if (!globalForDb.db) {
    const config = pgp();
    const helpers = config.helpers;
    globalForDb.db = config(CONNECTION_STRING);
    globalForDb.helpers = helpers
}

export const db = globalForDb.db;
export const helpers = globalForDb.helpers;