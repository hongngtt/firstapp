const { Pool } = require('pg');

// Configure the PostgreSQL connection

const pool = new Pool({
  user: 'userdb_22tl_user',
  host: 'dpg-cp92rc5ds78s73cc5gcg-a.virginia-postgres.render.com',
  database: 'userdb_22tl',
  password: 'ISyKC53x1cdB6k7REJ2orJuYOogxfTT6',
  port: 5432,
  ssl:true,
});

// Function to insert a new username
const addUser = async (username) => {
    const query = 'INSERT INTO users (username) VALUES ($1) RETURNING *';
    const values = [username];
    try {
      const res = await pool.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.error('Error inserting username into database:', err.message);
      throw err;
    }
  };  

module.exports = { addUser };
