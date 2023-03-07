const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password, img } = req.body;

  try {
    const newUser = new User({ name, lastName, email, password, img });
    //check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;

    //generate a token
    //  const payload ={_id:newUser._id,
    // name,
    // }
    //  const token= await jwt.sign(payload ,process.env.SecretOrKey ,{ expiresIn:3600,});
    //save te user
    const newUserToken = await newUser.save();
    const payload = { _id: newUserToken._id, name: newUserToken.name };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res
      .status(200)
      .send({ newUser, msg: "user is saved", token: ` Bearer ${token}` });
  } catch (error) {
    res.status(500).send("can not save the user");
  }
});
//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    // create token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    console.log(token);
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: ` Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
  }
});
//get
router.get("/current", isAuth(), (req, res) => {
  try {
    res.status(200).send({ user: req.user });
  } catch (error) {
    console.log(error);
  }
});

// //delete product

router.delete("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.send({ msg: " user is  deleted " });
  } catch (error) {
    console.log(error);
  }
});
// //update

router.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ User: "result", msg: " user is  updated " });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
