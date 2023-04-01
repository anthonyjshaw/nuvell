import pg from 'pg'; 


const pool = new pg.Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'nuvell_dev',
  password: 'password',
  port: 5432,
})


export const getStories = (_, res) => {
	pool.query('SELECT * FROM stories ORDER BY id ASC', (error, results) => {
		if (error) {
		  throw error
		}
		res.status(200).json(results.rows)
	  })
	
}
export const getStory = (req, res) => {
	try {
		const id = parseInt(req.params.id)
		pool.query('SELECT * FROM stories WHERE id = $1', [id], (_, results) => {
		res.status(200).json(results.rows);
	  })
	} catch (error){
		console.error(error.stack);
		res.status(404).send("<h1 style='font-family:sans-serif;'>Story not found</h1>")

	}
	
	
}
export const createStory = (req, res) => {
	const {title, text, subscribers_only, labels, user_id } = req.body;
	const createdAt = new Date().toISOString();

	pool.query('INSERT INTO stories (title, text, subscribers_only, labels, created_at, user_id) VALUES ($1, $2, $3, $4, $5, $6)', [title, text, subscribers_only, labels, createdAt, user_id], (error, results) => {
		if (error) {
		  throw error
		}
		response.status(201).send(`${res} Story added with ID: ${res.insertId}`)
	  })
	
}
export const updateStory = (req, res) => {}
export const deleteStory = (req, res) => {}
export const deleteAllStories = (req, res) => {}
