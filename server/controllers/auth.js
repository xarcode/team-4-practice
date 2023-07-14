const User = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
        username,
        email,
        password,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = User.findOne({ username, password });

    if(!user) res.status(404).json({ message: "Invalid Credentials" });
    const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ username, token });
}

module.exports = { register, login };
