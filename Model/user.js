let db = require('../db');


module.exports = {
    getUser: callBack => {
    db.query(
      `select * from users`,[],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
    createUSer: (user,callBack)=>{
        return db.query('Insert into users(idUser, nom,mail,Mdp) values(?, ?, ?,?)', [user.idUser, user.nom, user.mail,user.Mdp],
        (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (mail, callBack) => {
    db.query(
      `select * from users where mail = ?`,
      [mail],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }        
        return callBack(null, results[0]);
      }
    );
  },
};
