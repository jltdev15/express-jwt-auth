const bcrypt = require("bcryptjs");
const User = require("../model/User.Model");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUser = await User.findOne({ username }).exec();

    if (!checkUser) {
      return res.status(400).json({
        content: "No found user",
      });
    }
    const passwordMatch = await bcrypt.compare(password, checkUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        content: "Password is incorrect",
      });
    }
    const accessToken = jwt.sign(
      { username: checkUser.username },
      "secret_ko_to",
      {
        expiresIn: "1h",
      }
    );
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      token: accessToken,
    });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
exports.RegisterUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: "Error registering user", error: err });
  }
};
