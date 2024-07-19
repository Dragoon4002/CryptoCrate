import User from '../models/users.model.js';

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const saveData = await userData.save();
        res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ message: "User data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserByAddress = async (req, res) => {
    try {
        const address = req.params.id;
        const userData = await User.find({id: address});
        if (!userData) {
            return res.status(404).json({ message: "User data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!userData) {
            return res.status(404).json({ message: "User data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await User.findByIdAndDelete(id);
        if (!userData) {
            return res.status(404).json({ message: "User data not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};