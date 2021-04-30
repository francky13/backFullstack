
const {deleteInfo,updateInfo,newInformation,getinfo} = require("../Model/info");

module.exports = {
    listeinfo: (req,res) => {
    getinfo((err, results) => {
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
    newInformation((err, results) => {
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
    update: (req,res) => {
    updateInfo((err, results) => {
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
    deleteliste: (req,res) => {
    deleteInfo((err, results) => {
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