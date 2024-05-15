const Sequelize = require("sequelize");
require("dotenv").config();

// Verbindungsinformationen aus der .env-Datei laden
const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Datenbankverbindung konfigurieren:
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
});

// Datenbankverbindung testen:
sequelize
  .authenticate()
  .then(() => {
    console.log("Verbindung zur Datenbank hergestellt.");
  })
  .catch((error) => {
    console.error("Fehler beim Verbinden zur Datenbank:", error);
  });

module.exports = sequelize;
