const { Router } = require("express");
const {
  addImages,
  getASchoolImages,
  deleteImages,
  getMySchoolImages,
} = require("../controllers/galleryController");

const { authenticateUser } = require("../middlewares/authentication");
const router = Router();

router.route("/").post(authenticateUser, addImages);
router
  .route("/school/:school_id")
  .get(getASchoolImages)
  .delete(authenticateUser, deleteImages);
router.route("/my_school").get(authenticateUser, getMySchoolImages);

module.exports = router;
