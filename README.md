# ✨Sistema de Recomendación de Películas
_____________________________________________________________________

## 📄 _Descripción del Proyecto_

The movie recommendation system es un proyecto pensado en la recomendación de: 
- Películas
- Series
- Géneros
- Actores
- Directores

La idea de este proyecto fue inspirada por el diseño de la plataforma de NETFLIX, con la finalidad de desarrollar una aplicación web de recomendación de películas basada en los gustos personales de cada uno de los usuarios que se encuentre registrado en la plataforma.
_____________________________________________________________________
## 🔧 _Dependencias Utilizadas_
Las dependencias utilizadas para la parte del Frontend fueron:
- HTML: Es un lenguaje de marcado para la elaboración de páginas web.
- Bootstrap: Este Framework nos ayudó a facilitar el desarrollo de la aplicación web, ya que, esta herramienta fue diseñada con el principio de crear sitios responsivos de manera más facil y sencilla. [https://getbootstrap.com/docs/5.2/getting-started/introduction/].
- JavaScript: Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos y fue el lenguaje que utilizamos para poder controlar la parte dinámica de nuestro sitio web.
- SASS: Es un lenguaje de hoja de estilos en cascada. SASS es un procesador CSS. Esta herramienta nos permitio personalizar todo el diseño de nuestra aplicación web (colores, tamaños, fuentes, etc.).
- SweetAlert: Es una librería de JavaScript que permite crear ventanas emergentes (alertas) con un diseño profesional y fácil de personalizar e implementar.
- Fontawesome: Es un conjunto de herramientas de fuentes e iconos basado en CSS y LESS.

Las dependencias utilizadas para la parte del Backend fueron:

- JavaScript: Fue vital para poder desarrollar la parte del backend ya que a través del método fetch nos permitio conectar la información alojada en nuestros formularios, con los controladores creados a partir del lenguaje de programación PHP.
- PHP: Es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web. Este lenguaje fue el principal intermediario entre nuestra base de datos alojada en MySQL y los formularios.
- MySQL: Es un sistema de géstión de base de datos relacional.
__________________________________________________________________________
## ⚙️ _Funcionalidades_
- 📁 Página Registro: En esta sección los usuarios podrán generar el registro en la aplicación web a través de un formulario donde se les solicitará completar los campos: nombre, nombre de usuario, correo electronico, contraseña y la selección de sus gustos personales (esta parte ayudará a alimentar el sistema de recomendación).
- 🌐 Página Login: Esta es la página principal de nuestro sitio web, ya que a partir de este medio, cada uno de los usuarios puede acceder a la página ingresando el correo eleçtronico y contraseña ingresados en el formulario de registro.
- 🧭 Navbar: Se puede decir que es el alma de la aplicación web, ya que sin su existencia no sería posible generar la navegavilidad entre las diversas secciones de la aplicación (Inicio, Películas, series, Administración de perfil y Logout).
- ✨Página de Inicio: Este será el apartado que podrá visualizar cada uno de los usuarios una vez que haya iniciado sesión en la página. Aquí podrán encontrar todas sus recomendaciones personales (géneros, actores y directores favoritos) las cúales son generadas a partir de la selección previa que se genero al momento de generar su registro.
- 🥷 Página Series: Aquí encontrarán todas las series alojadas en la API.
- 🪄 Página Peliculas: Aquí encontrarán todas las peliculas alojadas en la API.
- 🌎 Buscador: A través de esta herramienta los usuarios podrán generar la búsqueda de los títulos (peliculas y series) alojados en la API.
- ☢️ Página Administrador de Perfil: A través de esta sección, los usuarios podrán generar la actualización de sus datos personales, incluyendo los gustos.
- 😍 Finalmente, es importante mencionar que la plataforma tiene implementada también la funcionalidad de ver los detalles personales de cada película, para hacer esto posible, basta con seleccionar la imagen de la película para poder visualizar este apartado o información.