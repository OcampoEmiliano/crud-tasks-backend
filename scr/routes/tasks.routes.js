const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController'); // Importa el controlador

router.get('/', tareasController.Tareas);
router.get('/:id', tareasController.obtenerTarea);
router.post('/:id', tareasController.crear);
router.put('/:id', tareasController.modificar)
router.delete('/:id', tareasController.borrar);

module.exports = router;