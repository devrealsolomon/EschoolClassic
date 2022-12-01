const { Router } = require("express");
const {
  createNote,
  deleteNote,
  updateNote,
  getASchoolNotes,
} = require("../controllers/noteController");
const { authenticateUser } = require("../middlewares/authentication");
const router = Router();

router.route("/").post(authenticateUser, createNote);
router.route("/school/:school_id").get(getASchoolNotes);
router
  .route("/:note_id")
  .delete(authenticateUser, deleteNote)
  .put(authenticateUser, updateNote);

module.exports = router;
