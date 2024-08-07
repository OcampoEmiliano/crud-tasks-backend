const connectDB = require('../db');

async function obtenerTarea(req, res) {
  try { 
    const id = +req.params.id;

    const connection = await connectDB(); 
    const [results] = await connection.query('SELECT * FROM tasks WHERE id = ?', [id]);
    return res.json(results);
  } catch (error) {

    console.error(error); 
    res.status(500).json({ message: "error del servidor" }); //  error
  }
} 

async function Tareas(req,res) {
try {
const connection = await connectDB();
const [results] = await connection.query('SELECT * FROM tasks');
return res.json(results);
} catch (error){

}
}

async function crear(req, res) {
    const { title , description, isComplete } = req.body;

  try {

    // validaciones
    if (typeof title !== 'string' || tarea.trim() === '' || title.length <= 255) {
      return res.status(400).json({ message: "Nombre de tarea inválido. Debe ser una cadena no vacía y de 255 caracteres de maximo" });
    }
    if (typeof description !== 'string' || description.trim() === '') {
      return res.status(400).json({ message: "descripción inválida. Debe ser una cadena no vacía." }); 
    }
    if (typeof isComplete !== 'boolean') {
      return res.status(400).json({ message: "Prioridad inválida. Debe ser un valor booleano." }); 
    }

    

    // Insertar
    const [result] = await connection.query(
      'INSERT INTO tasks(title, description, isComplete) VALUES(?, ?, ?)',
      [title, description, isComplete]
    );
    res.json({ message: "Tarea creada", result });
    connection.end();

  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal server error" }); 
  }
}

async function modificar(req,res) {
  try {
const id = +req.params.id;
const {title, description, isComplete } = req.body;

const [result] = await connection.query('update tasks set title=?, description=?, isComplete=? where id =? ',[title, description, isComplete, id]);
res.json({message: "tarea modificada", result });

  } catch(error) {
    console.error(error); 
    res.status(500).json({ message: "Internal server error" }); 
  }
}
  async function borrar(req, res) {
    try {
      const id = +req.params.idTarea; 
  
      const connection = await connectDB(); 
  
      // DELETE
      const [results] = await connection.query('DELETE FROM tasks WHERE id = ?', [id]); 
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Tarea no encontrada" }); // tarea no encontrada
      } 
  
      return res.json({ message: "Tarea borrada exitosamente", results });
  
    } catch (error) {
      console.error(error);  
      res.status(500).json({ message: "Error al borrar tarea" }); // error del servidor
    }
  }
module.exports = {
  Tareas,
  obtenerTarea,
  crear,
  modificar,
  borrar,
};