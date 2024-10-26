const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");

// post note data

router.post("/addnote", (req, res) => {
  const { note, timeStamp } = req.body;

  if (!note) {
    return res.status(422).json("please fill all the fields");
  }

  try {
    conn.query(
      "INSERT INTO notes SET ?",
      { note, timeStamp },
      (err, result) => {
        if (err) {
          console.log("err", err);
          return res.status(500).json("Error inserting note");
        } else {
          return res.status(200).json(req.body);
        }
      }
    );
  } catch (error) {
    return res.status(500).json(error);
  }
});

// get Notes

router.get("/getnotes", (req, res) => {
  conn.query("SELECT * FROM notes", (err, result) => {
    if (err) {
      return res.status(422).json("no note data available");
    } else {
      console.log("result from server", result);
      return res.status(201).json(result);
    }
  });
});

// delete Note

router.delete("/deletenote/:id", (req, res) => {
  const { id } = req.params;

  conn.query("DELETE FROM notes WHERE id = ? ", id, (err, result) => {
    if (err) {
      return res.status(422).json("error");
    } else {
      return res.status(201).json(result);
    }
  });
});

// get single note

router.get("/note/:id", (req, res) => {
  const { id } = req.params;

  conn.query("SELECT * FROM notes WHERE id = ? ", id, (err, result) => {
    if (err) {
      return res.status(422).json("error");
    } else {
      return res.status(201).json(result);
    }
  });
});

// update notes api

router.patch("/updatenote/:id", (req, res) => {
  const { id } = req.params;

  const data = req.body;

  conn.query("UPDATE notes SET ? WHERE id = ? ", [data, id], (err, result) => {
    if (err) {
      return res.status(422).json({ message: "error" });
    } else {
      return res.status(201).json(result);
    }
  });
});

module.exports = router;
