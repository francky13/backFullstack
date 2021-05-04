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
   NewChiffre: (info,callBack)=>{
        return db.query('Insert vaccins user(nombre,dates) values(?,CURDATE())', [info.nombre],
        (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }

  }