const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {getUser,createUSer,getUserByUserEmail} = require("../Model/user");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.Mdp = hashSync(body.Mdp, salt);
    createUSer(body, (err, results) => {
      if (err) {
       
        return res.status(500).json({
          status: 500,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        status: 200,
        data: results
      });
    });
  },
   login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.mail, (err, results) => {
      if (err) {
           console.log(err);
            return;
      }
      if (!results) {
        return res.json({
          status: 500,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.Mdp, results.Mdp);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          status: 200,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          status: 500,
          data: "Invalid email or password"
        });
      }
    });
  },
  getUsers: (req, res) => {
    getUser((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        status: 200,
        data: results
      });
    });
  },
  };
