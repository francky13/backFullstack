const {getvaccins,NewChiffre,getvaccinstotal} = require("../Model/vaccins");

module.exports = {
    getnombrevaccins: (req,res) => {
    getvaccins((err, results) => {
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
    create: (req,res) => {
    NewChiffre((err, results) => {
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
    total: (req,res) => {
    getvaccinstotal((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        status: 200,
        data: results
      });
    });
    }
    };