const User = require("../models/userSchema.js");

module.exports.updateUser = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
};

module.exports.deleteUser = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

module.exports.getSingleUser = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({ success: false, message: 'No user found' });
            return;
        }

        res.status(200).json({
            success: true,
            message: "User found",
            data: user,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve user' });
    }
};

module.exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "Users found",
            data: users,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No users found' });
    }
};
