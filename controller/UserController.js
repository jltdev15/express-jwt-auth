const User = require("../model/User.Model");

exports.getProfile = async (req, res) => {
  console.log(req.user);
  const { username } = req.user;
  try {
    const currentUser = await User.findOne({ username }).exec();
    res.status(200).json({
      content: currentUser,
    });
  } catch (err) {
    res.status(401).json({
      content: err,
    });
  }
  // destructuring the object so only the username will show
};
