## Mittwoch, 15. Mai 2024:

# Welche Tickets wurden heute bearbeitet?/Was wurde gemacht?
- {EXPRESS: Überprüfung und Verbesserungen
#1} 
    -> `routes/index.js`:

- Import des Todo Modells korrigiert, da Sequelize verwendet wird und das Modell als Todo deklariert wurde

- Verwendung von `sequelize`- Methoden, wie `findAll`, `create`, `update`, `destroy`, anstelle von `find`, `save`, `findByIdAndUpdate` und `findByIdAndDelete`

## Zusammenfassung der App-Komponenten:
- `database.js`: Stellt die Verbindung zur MySQL-Datenbank her.
- `loggingMiddleware.js`: Definiert eine Middleware für das Logging mit Winston.
- `todo_model.js`: Definiert das Sequelize-Modell für die ToDo-Elemente.
- `routes/index.js`: Implementiert die CRUD-Routen für die ToDo-API.
- `server.js`: Setzt die Middleware, Routen und die Serverkonfiguration.