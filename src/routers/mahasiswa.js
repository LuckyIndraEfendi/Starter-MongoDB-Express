const express = require("express");
const router = express.Router();
const roleMahasiswa = require("../controllers/mahasiswa");

router.get("/",roleMahasiswa.Home);
router.get("/:id", roleMahasiswa.SearchId);
router.delete("/:id", roleMahasiswa.DeleteMahasiswa )
router.post('/',roleMahasiswa.CreateMahasiswa)
router.put("/:id",roleMahasiswa.UpdateMahasiswa)

module.exports = router;
