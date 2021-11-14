const debug = require("debug")("userscrud:user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

exports.create = async (req, res, next) => {
  const userExist = await User.finfOne({
    identification: req.body.identification,
  });

  if (userExist) {
    return res.status("409").send("User already exist");
  }

  let encryptedPassword = await bcrypt.hash(req.body.password, 10);

  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    identification: req.body.identification,
    password: encryptedPassword,
    photo: req.body.photo,
    active: req.body.active,
  });

  newUser.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("User registered successfully");
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("Username and password are required");
  }

  const userExist = await User.finfOne({ username: username });

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    const token = jwt.sign(
      { user_id: userExist.id, username },
      process.env.TOKENSECRET,
      { expiresIn: "2h" }
    );
    userExist.token = token;
    res.status(200).json({ username: username, token: token });
  } else {
    res.status(400).send("invalid credentials");
  }
};
