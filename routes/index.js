const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Todo = require("../models/todo_model");

// GET: Alle Todos abrufen
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Fehler beim Abrufen von Todos aus der Datenbank:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

// POST: Neues Todo hinzufügen
router.post("/todos", async (req, res) => {
  const { task } = req.body;
  try {
    const newTodo = new Todo({ task });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Fehler beim Hinzufügen eines neuen Todos:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

// PUT: Todo aktualisieren
router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo nicht gefunden" });
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Todos:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

// DELETE: Todo löschen
router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo nicht gefunden" });
    }
    res.json({ message: "Todo erfolgreich gelöscht" });
  } catch (error) {
    console.error("Fehler beim Löschen des Todos:", error);
    res.status(500).json({ message: "Interner Serverfehler" });
  }
});

module.exports = router;
