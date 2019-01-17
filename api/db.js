/* eslint-disable no-console */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// let dbString = '';

// const env = process.env.NODE_ENV || 'development';

// if (env === 'development') {
// dbString = process.env.DEV_DB_URL;
// } else {
// dbString = process.env.TEST_DB_URL;
// }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.log('connection error ', err.stack);
  }
  console.log('connected...');
});

const createQuestionerDb = () => {
  const queryString = 'CREATE DATABASE questionerdb';
  pool.query(queryString, (err, res) => {
    if (err) {
      throw err;
    } else {
      pool.end();
    }
  });
};

const createUsersTable = () => {
  const queryString = `
        CREATE TABLE users(
            id serial PRIMARY KEY,
            first_name character varying(50),
            last_name character varying(50),
            other_name character varying(50),
            email varchar,
            password VARCHAR(128) NOT NULL,
            phone_number int,
            user_name character varying(50),
            registered date,
            is_admin boolean
        )
    `;
  pool.query(queryString, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res, 'users table created');
  });
};

const createMeetupsTable = () => {
  const queryString = `                                                        
        CREATE TABLE meetups (
            id serial PRIMARY KEY,
            created_on TIMESTAMPTZ DEFAULT NOW(),
            location varchar,
            images varchar,
            topic varchar,
            happening_on date,
            tags varchar
        )`;
  pool.query(queryString, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res, 'meetups table created');
  });
};
const createQuestionsTable = () => {
  const queryString = `
        CREATE TABLE questions (
            id serial PRIMARY KEY, 
            created_on TIMESTAMPTZ DEFAULT NOW(),
            created_by INT NOT NULL REFERENCES users,
            meetup_id INT NOT NULL REFERENCES meetups,
            title character varying(50),
            question_body text NOT NULL,
            upvotes int,
            downvotes int
        )`;
  pool.query(queryString, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res, 'questions table created');
  });
};

const createRsvpTable = () => {
  const queryString = `
        CREATE TABLE rsvp(
            id serial PRIMARY KEY, 
            meetup_id INTEGER NOT NULL REFERENCES meetups, 
            user_id INTEGER NOT NULL REFERENCES users, 
            response character varying(20)
        )`;
  pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res, 'rsvp table created');
    }
  });
};

const deleteMeetupTable = () => {
  const queryString = 'DROP TABLE meetups';
  pool.query(queryString, (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(res, 'meetup table deleted');
    }
  });
};
const deleteQuestionsTable = () => {
  const queryString = 'DROP TABLE meetups';
  pool.query(queryString, (err, res) => {
    if (err) {
      pool.end();
      console.log(res, 'questions table deleted');
    }
  });
};

// createQuestionerDb();
// createMeetupsTable();
// createUsersTable();
// createQuestionsTable();
// createRsvpTable();
// deleteMeetupTable();
// deleteQuestionsTable();


export default pool;
