  let db = require('../db');


module.exports = {
getvaccins: callBack => {
    db.query(
      `select * from vaccins`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getvaccinstotal: callBack => {
    db.query(
      `select * from totalvaccins`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
   NewChiffre: (info,callBack)=>{
        return db.query('Insert vaccins user(nombre1,nombre2,dates) values(?,?,CURDATE())', [info.nombre1,info.nombre2],
        (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }

  }