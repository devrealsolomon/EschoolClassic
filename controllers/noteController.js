const Note = require("../models/Note");
const CustomError = require("../errors");
const { authorizeUser } = require("../utils");
const createNote = async (req, res) => {
  req.body.school = req.school.school_id;
  const note = await Note.create(req.body);
  res.status(200).json(note);
};
const updateNote = async (req, res) => {
  const noteToUpdate = await Note.findByIdAndUpdate(
    req.params.note_id,
    req.body,
    { new: true }
  );
  res.status(200).json(noteToUpdate);
};
const deleteNote = async (req, res) => {
  console.log(req.school);
  const noteToDelete = await Note.findById(req.params.note_id).populate(
    "school",
    { school_name: 1 }
  );
  if (!noteToDelete) {
    throw new CustomError.BadRequestError(
      `Note with id ${req.params.note_id} not found`
    );
  }
  authorizeUser(req.school, noteToDelete.school.school_name);
  await noteToDelete.remove();
  res.status(200).json("Note deleted successfully");
};
const getASchoolNotes = async (req, res) => {
  const notes = await Note.find({ school: req.params.school_id });
  res.status(200).json(notes);
};

module.exports = { createNote, updateNote, deleteNote, getASchoolNotes };
