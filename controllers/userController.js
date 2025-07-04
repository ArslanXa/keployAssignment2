import { pool } from '../db.js';

//Get All Users
export const getUsers = async (req, res) => {
  const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
  res.json(result.rows);
};

//Get User By Id
export const getUser = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
  res.json(result.rows[0]);
};

//Create User
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  res.status(201).json(result.rows[0]);
};

//Update User
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const result = await pool.query(
    'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *',
    [name, email, age, id]
  );
  if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
  res.json(result.rows[0]);
};

//Delete User
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM users WHERE id=$1', [id]);
  if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully' });
};
