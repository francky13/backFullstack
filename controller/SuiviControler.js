const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {cumuljournalier,cumul,cumulpays,positivite,NewSuivi} = require("../Model/suivi");

module.exports = {
    statistiqueJour: (req,res) => {
    cumuljournalier((err, results) => {
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
    statistique: (req,res) => {
    cumul((err, results) => {
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
    statistiquepays: (req,res) => {
    cumulpays((err, results) => {
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

    tauxpositiviter: (req,res) => {
    positivite((err, results) => {
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
    create: (req, res) => {
    const body = req.body;
    NewSuivi(body, (err, results) => {
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
  }
};