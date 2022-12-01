const { Router } = require("express");
const {
  initializePayStack,
  verify,
} = require("../controllers/payStackController");
const router = Router();

router.route("/init").post(initializePayStack);
router.route("/verify").post(verify);
module.exports = router;
