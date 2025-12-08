import pg from 'pg';
import { configDotenv } from 'dotenv';
configDotenv();

const {Pool} = pg;

const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PW,
});

export {pool};
