import User from "../models/userModel.js";

export default async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (!user || !user.isAdmin) return res.status(403).json({ message: 'Admin only' });
  next();
};
