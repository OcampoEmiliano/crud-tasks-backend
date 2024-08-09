import { Router } from 'express';
const router = Router();
import { Tareas, obtenerTarea, crear, modificar, borrar } from '../controllers/tareasController.js'; // Importa el controlador

router.get('/', Tareas);
router.get('/:id', obtenerTarea);
router.post('/:id', crear);
router.put('/:id', modificar)
router.delete('/:id', borrar);

export {router};