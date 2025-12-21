import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


// SIGN UP
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

         // بيتاكد من اليوزر
        const exist = await User.findOne({ email });
        
        if (exist) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // hash password
        const hashed = await bcrypt.hash(password, 10);

        // admin check
        const isAdmin = email === process.env.ADMIN_EMAIL;

        // create user
        const user = await User.create({
            name,
            email,
            password: hashed,
            isAdmin
        });

        res.status(201).json({
            message: 'User created',
            data: {
                user
            }
        });
    } catch (error) {
        console.log("Sing up error: ", error);
    }
};



// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

         const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET
        );

        res.status(200).json({
            message: 'Login success',
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        console.log("Login Error: ", error);
    }
};

