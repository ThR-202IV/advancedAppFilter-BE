const express = require("express");
const bootCampControllers = require("../controllers/bootcampControllers");
const router = express.Router();

router
  .route("/")
  .get(bootCampControllers.getAllBootcamps)
  .post(bootCampControllers.createNewBootcamp);

router
  .route("/:id")
  .put(bootCampControllers.updateBootcampById)
  .delete(bootCampControllers.deleteBootcampById);

module.exports = router;
