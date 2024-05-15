const express = require("express");
const loggingMiddleware = require("./middleware/loggingMiddleware");
const TodoModels = require("./models/CRUD_models");
const app = express();

const PORT = process.env.PORT || 3306;

// Logging-Middleware implementieren ('winston'):
app.use(loggingMiddleware);

// Importieren der CRUD-Routen
const todoRoutes = require("./routes/CRUD");

// Importieren der CRUD-Modelle (falls notwendig)
app.use(TodoModels);

// Body Parser Middleware für JSON-Daten
app.use(express.json());

// Verwenden der Todo-Routen
app.use("/api/todos", todoRoutes);

// Standardroute für die Verbindungstest
app.get("/", (req, res) => {
  res.send("Verbindung zum Server wurde hergestellt!");
});

// Starten des Servers
app.listen(PORT, () => {
  console.log(`Der Server läuft auf Port ${PORT}`);
});
