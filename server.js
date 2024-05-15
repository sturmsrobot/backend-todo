const express = require("express");
const app = express();
const sequelize = require("./config/database");
const todoRoutes = require("./routes/index");
const loggingMiddleware = require("./middleware/loggingMiddleware");

const PORT = process.env.PORT || 3000;

// Body Parser Middleware für JSON-Daten
app.use(express.json());

// Verwenden der Todo-Routen
app.use("/api/todos", todoRoutes);

// Logging-Middleware implementieren ('winston'):
app.use(loggingMiddleware);

// Standardroute für die Verbindungstest
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Der Server läuft auf Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Fehler beim Synchronisieren der Datenbank:", error);
  });
