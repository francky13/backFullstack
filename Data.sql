CREATE DATABASE FullstackCovis ;

use FullstackCovis;
//user
CREATE TABLE user(
  idUser INTEGER PRIMARY KEY auto_increment ,
  nom VARCHAR(20),
  mail VARCHAR(20),
  Mdp VARCHAR(100)
);
INSERT into user VALUES('1', "Andrianaivo","ranto","sg");

//pays
CREATE TABLE pays(
  idpays INTEGER PRIMARY KEY auto_increment ,
  nompays VARCHAR(20)
);

INSERT into pays VALUES('1', "Madagascar");
INSERT into pays VALUES('2', "France");
INSERT into pays VALUES('3', "Russia");


//situation
create table situation(
  idsituation INTEGER PRIMARY KEY auto_increment,
  nombreTest INTEGER ,
  CasConfirmer INTEGER,
  Reanimation INTEGER,
  retablie INTEGER,
  Deces INTEGER,
  dates date,
  idregion INTEGER,
  foreign key(idregion) references pays(idpays)
);
INSERT into situation VALUES(1, 1200,500,100,0,10,CURDATE(),1);
INSERT into situation VALUES(2, 20000,700,250,0,35,"2021-04-27",2);

//view situation

CREATE OR REPLACE VIEW positivite AS select (sum(CasConfirmer)*100)/Sum(nombreTest) as pourcentage from situation
CREATE OR REPLACE VIEW cumul AS select sum(CasConfirmer)as totalcas ,Sum(Reanimation) as totalreanimation,sum(retablie)as totalretablie,sum(deces) as totaldeces  from situation
CREATE OR REPLACE VIEW cumulpays AS select sum(CasConfirmer)as totalcas ,Sum(Reanimation) as totalreanimation,sum(retablie)as totalretablie,sum(deces) as totaldeces  from situation group by idregion

CREATE OR REPLACE VIEW cumuljournalier AS select sum(CasConfirmer)as totalcas ,Sum(Reanimation) as totalreanimation,sum(retablie)as totalretablie,sum(deces) as totaldeces  from situation GROUP BY dates


create table information(
    id INTEGER  PRIMARY KEY auto_increment,
    titre text NOT NULL,
    contenue text NOT NULL,
    dates TIMESTAMP NOT NULL
    );