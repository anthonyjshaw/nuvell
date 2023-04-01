import  express from "express";
import {} from 'dotenv/config';
import cors from 'cors';
import storyRoutes from './routes/stories.js';
import path from 'path';
const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = {
	'stories': storyRoutes
}

Object.keys(routes).forEach(e => {
    app.use(`/api/v1/${e}`, routes[e]);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
	console.log(`Listening on port ${PORT}`)
})