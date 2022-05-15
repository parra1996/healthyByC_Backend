# healthyByC_Backend

Este proyecto consiste en recrear el backend de una pagina web de recetas de comidas saludables donde los usuarios podran registrarse, ver las recetas disponibles,
y adquirirlas. Para esto utilizamos el metodo MVC(modelo, vista y controlador), explicaremos cada uno de estos a continuacion. 
Para las BBDD utilizamos Sequelize( que es el ORM para Node que nos permite ejecutar sentencias SQL a travez de MySQL Workbench).

### Instrucciones 

<ol>
  <li>Comenzamos con clonar este repositorio en tu ordenador con el comando Git clone URL </li>
   <li>npm init -y para arrancar node</li>
    <li>npm i para descargar todas las dependecias que use en este proyecto como:  
      <ul>
         <li>sequelise</li>
         <li>mysql2</li>
         <li>axios</li>
         <li>express</li>
         <li>nodemon</li>
         <li>cors</li>
         <li>jsonwebtoken</li>
         <li>bcrypt</li>
      </ul>

      
<img src="https://i.blogs.es/91493f/sequelize/1366_2000.png" width="200" height="100" />
<img src="https://miro.medium.com/max/400/1*nh5b3GmD94THFsHBoGhOFw.jpeg" width="200" height="100" />
<img src="https://www.poynter.org/wp-content/uploads/2016/12/Screen-Shot-2016-12-13-at-6.46.45-AM.png" width="200" height="100" />
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png" width="200" height="100" />
<img src="http://jwt.io/img/logo-asset.svg" width="200" height="100" />
<img src="https://dirask.com/static/bucket/1618506774728-3nbARBBAEZ--bcrypt%20%281%29.png" width="200" height="100" />
<img src="https://addons.mozilla.org/user-media/previews/full/227/227652.png?modified=1622133270" width="200" height="100" />
      
      
      
      
  <li> sequelize init, para arrancar a hacer peticiones SQL</li>
  <li> npm run dev, para levantar el servidor.  Las peticiones que le haras al mismo se haran a travez de Postman simulando que tenemos un frontend(futurmente lo habra)</li>
  </ol>
  
   # Habiendo dicho que use el patron MVC mostrare el de cada tabla usado.
   
   ## Estos son los endpoints de USER y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso UserController donde veras sus siguientes funciones.

![](img/user_router.png)

## Estos son los endpoints de USER y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso UserController donde veras sus siguientes funciones.

![](img/user_controller.png)

   ## Estos son los endpoints de RECETAS y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso RecetasControllers donde veras sus siguientes funciones.

![](img/receta_router.png)

## Estos son los endpoints de RECETAS y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso RecetasController donde veras sus siguientes funciones.

![](img/receta_controller.png)

   ## Estos son los endpoints de RECETA_ADQUIRIDA y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso Receta_adquiridaController donde veras sus siguientes funciones.
![](img/receta_adquirida_router.png)

## Estos son los endpoints de RECETA_ADQUIRIDA y sus funciones van redirigidos a la carpeta controller y su fichero propio, en este caso Receta_adquiridaController donde veras sus siguientes funciones.

![](img/receta_adquirida_controller.png)

# Relacion de las tablas.
Una de las razones por las que use SQL para mi BBDD fue porque puedo hacer tablas relacionadas. Aqui dejo una foto de mis tablas.

![](img/diagrama2.png)

# Futuras incorporaciones.

Pronto se podra permitir al usuario de ingresar sus datos para que la nutricionista le haga una dieta personalizada al mismo de acuerdo a sus especificaciones y objetivos dieteticos.
Por eso hay mas tablas de las mostradas en la imagen.

# Dev: Juan Pablo Parra Labarca.
# Email: parrajp1996@gmail.com.

