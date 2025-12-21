import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import authenticate from '../middlewares/authenticate.js';
import authorizeAdmin from '../middlewares/authorizeAdmin.js';

const router = express.Router();


// CREATE Product (Admin only)
router.post('/', authenticate, authorizeAdmin, createProduct);

// READ all Products
router.get('/', getAllProducts);

// UPDATE Product (Admin only)
router.put('/:id', authenticate, authorizeAdmin, updateProduct);

// DELETE Product (Admin only)
router.delete('/:id', authenticate, authorizeAdmin, deleteProduct);

export default router;
