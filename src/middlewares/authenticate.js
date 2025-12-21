import { promisify } from 'util'
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export default async (req, res, next) => {
    try {
        let token;

	    if (req.headers.authorization?.startsWith("Bearer")) {
	    	token = req.headers.authorization.split(" ")[1];
	    }

	    if (!token) {
	    	return next(new AppError("You are not logged in! Please login and try again.", 401));
	    }

	    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
	    const currentUser = await User.findOne({ _id: decoded.id });

	    if (!currentUser) {
	    	return next(new AppError("User no longer exists!!", 401));
        }

        req.userId = currentUser._id;
        next();
    } catch (error) {
        console.log("Invalid token", error);
    }
};

// // const token = req.headers['authorization'];

// const token = req.headers.authorization.split(" ")[1];

// if (!token) return res.status(401).json({ message: 'No token provided' });

// try {
//     const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;

//     next();
// } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
// }

