# MiFlix - Catálogo de Películas y Series

MiFlix es una interfaz web elegante y sencilla para explorar un catálogo de películas y series. La plataforma permite a los usuarios descubrir contenido nuevo, ver detalles como el año, el director, y acceder a los trailers.

## Descripción del Proyecto

Este proyecto simula una plataforma de streaming, presentando una cuidada selección de contenido de cine y televisión. La navegación es intuitiva, con una página de inicio que destaca los títulos más populares, secciones dedicadas para películas y series, y una página de detalle para cada título.

## Capturas de Pantalla

**Página de Inicio**
![](/assets/img/capturas/Inicio.png)

**Catálogo de Películas**
![](/assets/img/capturas/CatalogoPeliculas.png)

**Catálogo de Series**
![]()

**Contacto**
![](/assets/img/capturas/Contacto.png)

## Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:** Para el diseño, la maquetación y la estética general, incluyendo layouts responsivos.
*   **JavaScript (ES6+):** Para la interactividad, la manipulación del DOM y la carga dinámica del contenido desde una fuente de datos local.
*   **Bootstrap 5:** Framework de CSS utilizado para acelerar el desarrollo de componentes de UI responsivos y modernos.

## Funcionalidades Implementadas

-   **Página de Inicio Dinámica:** Un carrusel principal presenta las películas más destacadas y dos secciones separadas muestran una selección de películas y series populares.
-   **Catálogo de Contenido:** Páginas dedicadas que listan todas las películas y series disponibles en el catálogo.
-   **Vista de Detalle:** Al hacer clic en cualquier título, el usuario es redirigido a una página de detalle que muestra:
    -   Póster del título.
    -   Descripción o sinopsis.
    -   Año de lanzamiento y director.
    -   Tráiler incrustado desde YouTube.
-   **Navegación Sencilla:** Una barra de navegación clara y fija permite un fácil acceso a todas las secciones del sitio.
-   **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta ordenadores de escritorio, gracias al uso de Bootstrap y CSS personalizado.
-   **Formulario de Contacto:** Una sección de contacto para que los usuarios puedan comunicarse.

## Extras Implementados

-   **Carga de Datos desde JS:** Todo el catálogo de películas y series se gestiona a través de un array de objetos en JavaScript, lo que facilita la adición, edición o eliminación de títulos sin necesidad de modificar el HTML.
-   **Componentes Reutilizables:** El código JavaScript incluye funciones reutilizables para generar dinámicamente las tarjetas de contenido y otros componentes, manteniendo el código limpio y escalable.
-   **Experiencia de Usuario Mejorada:** El uso de imágenes de fondo (`wallpaper`) en el carrusel y un diseño visual coherente buscan ofrecer una experiencia de usuario atractiva.
