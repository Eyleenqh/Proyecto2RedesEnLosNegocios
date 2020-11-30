# Proyecto2RedesEnLosNegocios
Este proyecto consiste en un servidor web elaborado en lenguaje Java, que soporta tanto el protocolo HTTP como el HTTPS, capaz de cargar html, imágenes y CSS en un navegador.

## Software necesario para la modificación del proyecto
A continuación se listará el software que se utilizó para la elaboración del proyecto. Si desea utilizar otras versiones o programas, podría haber problemas de compatibilidad.
* Java JDK 1.8
* Java keytool (se encuentra en la carpeta "bin" de la ruta de instalación del JDK)
* Netbeans 8.2 como entorno de desarrollo
* Un navegador web

## Crear certificado
Usando Java keytool se va a crear un certificado autofirmado y así poder utilizarlo en el protocolo https, para crearlo se deben seguir los siguientes pasos:

1. Abrir el símbolo el sistema(cmd) en modo administrador

2. Posicionarse, usando "cd" en la carpeta donde se encuentra keytool.exe ubicado en la carpeta "bin" de la ruta de instalación del JDK.

3. Ingresar el comando "keytool -genkey -keyalg RSA -alias selfsigned -keystore key.jks -storepass 123456-validity 360 -keysize 2048" y ejecutarlo.

4. Ingresar el nombre, departamento de la organización, la ciudad, el estado o provincia y el código de dos letras de país.

5. Si los datos anteriores están bien ingresar "y" y ejecutar, de lo contario ingresar "n" ejecutar y volver a repetir desde el paso 4.

6. Ingresar la contraseña del alias "123456" y ejecutar.

7. Volver a ingresar la contraseña del alias, ejecutar y listo, el certificado se creo en la carpeta "bin".

En el proyecto, en la clase "ServidorHttps" debe cambiar la ruta del certificado, por el que se creo en los pasos anteriores.

En caso de que se decida cambiar el nombre de certificado o las contraseñas, deberá realizar los cambios en "ServidorHttps" para que utilice los nuevos datos.

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
