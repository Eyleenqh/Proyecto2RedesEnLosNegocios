# Proyecto2RedesEnLosNegocios
Este proyecto consiste en un servidor web elaborado en lenguaje Java, que soporta tanto el protocolo HTTP como el HTTPS, capaz de cargar html, imágenes y CSS en un navegador.

## Software necesario para la modificación del proyecto
A continuación se listará el software que se utilizó para la elaboración del proyecto. Si desea utilizar otras versiones o programas, podría haber problemas de compatibilidad.
* Java JDK 1.8
* Java keytool (se encuentra en la carpeta "bin" de la ruta de instalación del JDK)
* Netbeans 8.2 como entorno de desarrollo
* Un navegador web

## Pasos para instalar y modificar el proyecto
Primeramente se debe clonar este repositorio o bien, descargar el código comprimido.

Para clonar el proyecto se debe 
* Abrir NetBeans. 
* Ir a Team->Git->Clone y seleccionarlo.
* En el campo que dice Url del repositorio se ingresa https://github.com/Eyleenqh/Proyecto2RedesEnLosNegocios.git En los campo para usuario y clave se ingresar las credenciales correctas. 
* Después dar click al botón de siguiente. 
* Se debe seleccionar la casilla que dice master y darle click al boton siguiente.

Una vez se tiene el código fuente, ya se podrán realizar los cambios que se deseen, ya que no es necesaria la instalación de librerías externas.

Una vez se tenga el proyecto en NetBeans se debe posicionar en la raíz del proyecto, específicamente sobre el nombre y seleccionar click derecho sobre el proyecto>Build.

## Ejecutar el proyecto
Primeramente se debe abrir el IDE Netbeans o el IDE de su preferencia y seguidamente se debe abrir el proyecto y seleccionar "Run" en la clase "Proyecto2Redes". También se puede hacer click derecho sobre el proyecto y seleccionar "Run".

## Resultados
Una vez ejecutado el proyecto, el servidor ya estará esperando por solicitudes de un navegador, por lo cual solo resta ingresar a un navegador web para realizar las solicitudes.

Cuando desde un navegador se ingresa la dirección del servidor este retonarla la página solicitada.

Si no se indica un pagina cuando se conecta al servidor, este retornara una página por defecto.

En caso de que la página solicitada no exista, se mostrará una página indicado que no ha sido encontrada.
