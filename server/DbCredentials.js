module.exports = [
  {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pass',
    database: process.env.DB_DATABASE_EA || 'b3_ea',},
  {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pass',
    database: process.env.DB_DATABASE_NEXUS || 'b3_nexus',},
  {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pass',
    database: process.env.DB_DATABASE_DU4 || 'b3_du4',},

];
