# Proyecto Inventario
### Inicio del proyecto
abre la terminal en la carpeta donde vas a guardar el proyecto, y pon los siguientes comandos:
```
mkdir proyecto-inventario
cd proyecto-inventario
```
```
npm init
```
```
touch .env .gitignore index.js 
```
Instalamos las dependencias, recuerden npm es el manejador de paquetes de node o node package manage
```
npm install express mongoose dotenv cors
```
```
npm install --save-dev nodemon
```
y en el .gitignore copian 
```
node_modules
.env
```
Y ahora vamos a subir el codigo a Github
### Hola mundo en Node.js
ahora vamos a hacer un hola mundo en node.js, para eso vamos a poner el siguiente codigo en index.js
```
const express = require("express")
const app = express()
const PORT = 3006
app.set("port",PORT)
app.get("/",(req,res)=>{
    res.send("hola mundo")
})
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})
```
Vamos a explicar cada una de las lineas
- const express = require("express")
Vamos a usar el paquete express con el nombre express estamos trayendo la herramienta que vamos a usar.
- const app = express()
Definimos como la vamos a llamar para usarla
- const PORT = 3006
Defino un puerto
- app.set("port",PORT)
Configuro el puerto del app
- app.get("/",
tenemos un verbo de http y una ruta y definimos una funcion que se ejecuta 
-(req,res)=>{
    - req:La información que recibo del cliente
    - res: la respuesta que le doy a ese cliente o lo que le envio
- res.send("hola mundo")
estoy enviando la respuesta "hola mundo" 
- })
Aqui estoy cerrando lo de arriba
- app.listen(PORT,()=>{
le dijo que me escuche el puerto
- console.log(`server running in port ${PORT}`)
Me envio este mensaje para saber que todo esta OK

### Rutas y controladores
Primero creamos las carpetas con 
```
mkdir controllers models routes
```

## Vamos a trabajar en el README de lo que vimos hoy