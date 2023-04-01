import express from 'express';
import {
	getStories,
	getStory,
	createStory,
	updateStory,
	deleteStory,
	deleteAllStories
} from '../controllers/stories.js'
const router = express.Router()

router.get('/', getStories);
router.get('/:id', getStory);
router.post('/', createStory);
router.patch('/:id', updateStory);
router.delete('/:id', deleteStory)
router.delete('/', deleteAllStories)

export default router;