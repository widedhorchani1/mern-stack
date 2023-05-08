const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
     let { id} = req.params;
     const user = await User.findById(id).select (" -password");
    res.status(200).json({ status: true, data: user });
  } catch (err) {
    res.status(400).json({ status: false,error });
  }
};