### Prueba técnica
### - Herramientas utilizadas

Vite JS - React v18.2
Visual studio Code
NodeJs v18

### - Especificación de componentes
los componentes del proyecto fueron almacenados dentro de la carpeta **src/components**, en esta se encuentras las subcarpetas:


####/prueba-tecnica
                
+ public
+ src
    + /assets
    + /components
		+ **/layout**  -> elementos del layout, header, footer y contenido general
		+ **/pages**  -> componentes enrutados para la navegación de la página
		+ **/styles**  -> estilos de los componentes agrupados por paginas y layouts
    + /data
	    + **data.json**  -> datos estaticos para cargarse en las páginas
### Pasos para desarrollo del proyecto
- se realiza analisis de la página a replicar, los componentes visuales y paginas encontradas.
- se listan los componentes y las rutas que cada uno va a tener.
- se crean los componentes del layout como primera medida.
- se establece el layout de la pagina pricipal y se definen las rutas para las demas páginas
- se crean los componentes enrutados como lo son home, soluciones, enterprise y contacto
- se adaptan componentes del layout para que sea mas dinamicos con la información y se crean datos estaticos en archivo json para cargar a estos.
- se utilizan los diferentes componentes del layout para las paginas de inicio, soluciones, enterprise y contacto
- se realizan modificaciones en el bootstrap y estilos en general para mejorar la experiencia en dispositivos moviles.
##Consideraciones adicionales
- implementación de react-bootstrap para maquetación y componentes prediseñados
- se utilizo react-router-dom para definir las rutas y componentes de la aplicación
- se utilizaron datos estaticos en un archivo json simulando los datos que bien podrían estar parametrizados en otro recurso o que pudiesen obtenerse de algun servicio o REST api.

### - Ejecución del proyecto

`$ npm install`

`$ npm run dev`

###