import express from 'express';
import { getWishlist, toggleWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/', getWishlist);
router.post('/toggle', toggleWishlist);

export default router;
