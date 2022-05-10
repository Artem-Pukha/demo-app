IF NOT EXISTS(SELECT principal_id
              FROM sys.server_principals
              WHERE name = 'demo_user')
  BEGIN
    CREATE LOGIN demo_user WITH PASSWORD = 'demoapppassword';
    ALTER SERVER ROLE sysadmin ADD MEMBER demo_user;
  END
GO

USE master
IF EXISTS(SELECT *
          FROM sys.databases
          WHERE name = 'DemoDB')
  DROP DATABASE DemoDB

CREATE DATABASE DemoDB