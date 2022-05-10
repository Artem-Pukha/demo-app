set -e

DEV_SERVER=localhost,1433
USER_NAME=sa
PASSWORD=Insecurelocalpassword0

echo "================================================================="
echo "creating DB - user and database"
echo "================================================================="
sqlcmd -S $DEV_SERVER -U $USER_NAME -P $PASSWORD -i initDB.sql

echo "created DB"

echo "================================================================="
echo "creating DemoDB schema For DB"
echo "================================================================="

sqlcmd -S $DEV_SERVER -U $USER_NAME -P $PASSWORD -i schema.sql