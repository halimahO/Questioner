/* eslint-disable no-console */
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.log('connection error ', err.stack);
  }
  console.log('connected...');
});

const HerokuDb = {
  async migrate() {
    try {
      console.log('Created users table');
      await pool.query(`drop table if exists users; create table users(
        id serial not null constraint users_pkey primary key,
        first_name text,
        last_name text,
        other_name text,
        email text not null,
        password text not null,
        phone_number text,
        username text,
        registered date,
        is_admin boolean
      ); create unique index users_email_uindex on users (email);
     `);

      console.log('Created meetup table');
      await pool.query(`drop table if exists meetups; create table meetups(
        id serial not null constraint meetups_pkey primary key,
        location text not null,
        images text[],
        tags text[],
        topic text not null,
        happening_on date,
        status text default 'active'::text,
        created_on timestamp default now() not null
      );
   `);

      console.log('Created questions table');
      await pool.query(`drop table if exists questions; create table if not exists  questions(
        id serial not null constraint questions_pkey primary key,
        createdby_id integer REFERENCES users(id) ON DELETE CASCADE,
        meetup_id integer REFERENCES meetups(id) ON DELETE CASCADE,
        title text,
        body text,
        votes integer not null,
        created_on timestamp default now() not null);
    `);
      console.log('Created comments table');
      await pool.query(`drop table if exists comments; create table if not exists  comments(
        id serial constraint comments_pkey primary key not null,
        question_id integer REFERENCES questions(id) ON DELETE CASCADE,
        title text not null,
        body text not null,
        comment text not null);
    `);

      console.log('Created rsvp table');
      await pool.query(`drop table if exists rsvp; create table if not exists  rsvp(
        id serial constraint rsvp_pkey primary key not null,
        meetup_id integer REFERENCES meetups(id) ON DELETE CASCADE,
        question_id integer REFERENCES questions(id) ON DELETE CASCADE,
        response text not null);
    `);

      process.exit(0);
    } catch (e) {
      console.log('Caught: ', e.message);
    }
  },
};

export default HerokuDb;

HerokuDb.migrate();
