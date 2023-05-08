const user = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await user.findByIdAndUpdate(id,
         { $set: { ...req.body } },
         { new: true });
    res
      .status(200)
      .json({ status: true, message: " User has been update successfully" });
  } catch (error) {
    if (error.errors.userName) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.userName.message });
    } else if (error.errors.email) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.email.message });
    }  else if (error.errors.phone) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.phone.message });
    }
   else  if (error.errors.address) {
      return res
        .status(401)
        .json({ status: false, error: error.errors.address.message });
    }
  }
};