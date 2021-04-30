let db = require('../db');


module.exports = {
    cumuljournalier: callBack => {
    db.query(
      `select * from cumuljournalier`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  cumul: callBack => {
    db.query(
      `select * from cumul`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  cumulpays: callBack => {
    db.query(
      `select * from cumulpays`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  positivite: callBack => {
    db.query(
      `select * from positivite`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
    NewSuivi: (suivi,callBack)=>{
        return db.query('Insert into situation(nombreTest, CasConfirmed,Reanimation,retablie,Deces,dates,idregion) values(?, ?, ?,?,?,CURDATE(),?)', [suivi.nombreTest, suivi.CasConfirmer, suivi.Reanimation,suivi.retablie,suivi.retablie,Deces.idregion],
        (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};