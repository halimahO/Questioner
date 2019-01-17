import pool from '../db/indexx';

const getMeetups = (request, response) => {
  pool.query('SELECT * FROM questions ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).send(results.rows);
  });
};
