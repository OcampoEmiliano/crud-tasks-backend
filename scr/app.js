const express = require('express');

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3000;

// Modulo de rutas - Todos los endpoints estarían aquí
const taskRouter = require('../scr/routes/tasks.routes'); 

app.use('/tasks', taskRouter);

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
