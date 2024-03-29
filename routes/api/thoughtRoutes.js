const router = require("express").Router();

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require("../../controllers/thoughtController");
  

  //THOUGHT routes
  router.get("/", getAllThoughts);
  router.post("/", createThought);
  router.get("/:id", getThoughtById);
  router.put("/:id", updateThought);
  router.delete("/:id", deleteThought);

  //REACTION routes
  router.post("/:thoughtId/reactions", addReaction);
  router.delete("/:thoughtId/reactions", removeReaction);


  module.exports = router;