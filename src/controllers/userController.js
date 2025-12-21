import User from "../models/userModel.js";

export const getUserInfo = async (req, res) => {
    try {
	const user = await User.findOne({ _id: req.userId});

	res.status(200).json({
		status: "success",
		data: { user },
	});

    } catch (error) {
        console.log("Get User error: ", error);
    }
}