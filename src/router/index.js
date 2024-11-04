import { Router } from 'express'
const router = Router()

//De la raiz renderiza un archivo llamado index.ejs
router.get('/index', (req, res) =>{
    res.render('index',{title: 'Ignite Gym'});
});
router.get('/servicios', (req, res) =>{
    res.render('servicios',{title: 'Servicios'});
});
router.get('/planes', (req, res) =>{
    res.render('planes',{title: 'Planes'});
});
router.get('/productos', (req, res) => {
    const productos = [
        { nombre: 'Producto 1', imagen: '/img/producto1.png' },
        { nombre: 'Producto 2', imagen: '/img/producto2.png' },
    ];
    res.render('productos', { title: 'Productos', productos });
});
router.get('/login', (req,res) =>{
    res.render('login',{title:'Login'})
})
router.get('/nosotros',(req,res) =>{
    res.render('nosotros',{title:'Acerca de Nosotros'})
})
export default router