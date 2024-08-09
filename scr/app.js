import express, { json } from 'express';

const app = express();
app.use(json()); 

const PORT = process.env.PORT || 3000;

// Modulo de rutas - Todos los endpoints estarían aquí
import {router} from '../scr/routes/tasks.routes.js'; 

app.use('/tasks', router);

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
