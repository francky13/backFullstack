  
  let db = require('../db');


module.exports = {
getinfo: callBack => {
    db.query(
      `select * from information`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
   newInformation: (info,callBack)=>{
        return db.query('Insert infromation user(id_pays, titre,sous_titre,contenue,dates,source) values(?, ?, ?,?,?,?)', [info.id_pays, info.titre, info.sous_titre,info.contenue, info.dates, info.source],
        (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateInfo: (data, callBack) => {
    pool.query(
      `update information set  contenue=? ,date = CURDATE() `,
      [
        data.contenue,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteInfo: (data, callBack) => {
    pool.query(
      `delete from information  where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};