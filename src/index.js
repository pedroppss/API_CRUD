const express =require('express');
const app=express();
const morgan=require('morgan');
//Configuraciones
app.set('port',process.env.PORT || 8080);
app.set('json spaces', 2)
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Nuestro primer WS Get
app.get('/',(req,res)=>
{
    res.json
    (
        {
            
            "Title": "Hola mundo",
            "nombre":"Pedro Perez",
            "edad":18
        }
    );
})
var formulario ='<form method="post" action="/n">'
    + '<p>PedroPerezSanchez</p>'
    + '<p>Edad:20</p>'
    + '</form>';
 
app.get('/n', function (req, res) 
{
 
    res.send('<html><body>'
            + formulario
            + '</html></body>'
    );
 
});
app.post('/n', function (req, res) {
 
    
    var coches = 'Peugeot406';
 
    res.send('<html><body>'
            +'<p>'+coches+'</p>'
            +formulario
            +'</html></body>'
    );
 
})
app.put('/', function(req, res)
{
    res.json
    (
        {
            
            "Title": "Hola mundo2",
            "nombre":"Pedro Perez Sanchez",
            "edad":20
        }
    );
    res.status(200).send('Fue actualizado');
})
var formulario ='<form method="post" action="/n1">'
    + '<h1 id="nombre">PedroPerezSanchez</h1>'
    + '<h1>Edad:20</h1>'
    + '</form>';
app.get('/n1', function (req, res) 
{
     
        res.send('<html><body>'
                + formulario
                + '</html></body>'
        );
     
});
app.delete('/n1', function(req, res)
{
   
        
            if(nombre="PedroPerezSanchez")
            {
                delete(formulario);
            }
    res.status(200).send('Fue Eliminado');
    
})
//Iniciando el servidor
app.listen(app.get('port'),()=>
{
    console.log(`Server listening on port ${app.get('port')}`);
});
