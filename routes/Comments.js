const { Router } = require("express");
const {
  createComment,
  getAPostComments,
} = require("../controllers/commentController");
const router = Router();
router.route("/:post_id").get(getAPostComments).post(createComment);
module.exports = router;
