Use DemoDB;

DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
    id_user INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(45) NOT NULL,
    name VARCHAR(45) NOT NULL,
    surname VARCHAR(45) NOT NULL);

  DROP TABLE IF EXISTS item;

  CREATE TABLE item (
    id_item INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    fk_user INT NOT NULL,
    title VARCHAR(45) NOT NULL,
  INDEX fk_Item_User_idx (fk_user ASC),
  CONSTRAINT fk_Item_User
    FOREIGN KEY (fk_user)
    REFERENCES "user" (id_user)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);