import express from 'express'; // importamos express para declara rutas
import CategoriaController from '../controller/categoriaController.js';

const router = express.Router(); // creamos una constante router que es igual a express.Router() para crear rutas


// creamos un parametro para el servidor  con req res que envia y recive datos
router.get('/',CategoriaController.getAllCategorias);


// --------------------------------------------------------------------

router.post('/',(req,res)=>{
    console.log(req.body); // mostramos en consola lo que se envia desde postman
    res.json("hi"); // devolvemos lo que se envia desde postman
});

router.put('/:id',(req,res)=>{
    console.log(req.body); 
});


export default router; // exportamos el router para usarlo en app.js