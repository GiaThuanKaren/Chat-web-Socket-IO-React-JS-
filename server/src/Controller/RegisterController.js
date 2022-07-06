const User = require("../Model/User");

const RegisterController = {
  Register: async function (req, res) {
    const dataFormClient = req.body;
    console.log(dataFormClient);
    const user = new User(dataFormClient);
    try {
      let result = await user.save();
      console.log(result);
      res.send("Inser route Success");
    } catch (e) {
      res.send("Fail to insert");
      console.log(e), "Regis Controller ";
    }
  },
};

module.exports = RegisterController;
