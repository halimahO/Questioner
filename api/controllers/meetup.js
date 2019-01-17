import db from '../db';
import 'babel-polyfill';

const Meetup = {
  async getAllMeetups(req, res) {
    const findAllQuery = 'SELECT * FROM meetups ORDER BY id ASC';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },

  async getOneMeetup(req, res) {
    const text = 'SELECT * FROM meetups WHERE id = $1';
    const id = parseInt(req.params.id, 10);
    try {
      const { rows } = await db.query(text, [id]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'meetup not found' });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send({ message: 'Id must be a number' });
    }
  },



};
export default Meetup;
