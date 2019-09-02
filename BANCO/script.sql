/* Lógico_1: */

CREATE TABLE user (
    name varchar(100),
    email varchar(250),
    pic BLOB,
    password varchar(43),
    nick varchar(50),
    Id INTEGER PRIMARY KEY,
    wins INTEGER,
    UNIQUE (nick, Id)
);

CREATE TABLE match (
    date DATE,
    status CHAR,
    id INTEGER PRIMARY KEY
);

CREATE TABLE team (
    score INTEGER,
    id INTEGER PRIMARY KEY,
    win INTEGER,
    fk_match_id INTEGER
);

CREATE TABLE plays (
    fk_user_Id INTEGER,
    fk_team_id INTEGER
);
 
ALTER TABLE team ADD CONSTRAINT FK_team_2
    FOREIGN KEY (fk_match_id)
    REFERENCES match (id)
    ON DELETE RESTRICT;
 
ALTER TABLE plays ADD CONSTRAINT FK_plays_1
    FOREIGN KEY (fk_user_nick???, fk_user_Id???)
    REFERENCES user (???, ???)
    ON DELETE RESTRICT;
 
ALTER TABLE plays ADD CONSTRAINT FK_plays_2
    FOREIGN KEY (fk_team_id)
    REFERENCES team (id)
    ON DELETE SET NULL;