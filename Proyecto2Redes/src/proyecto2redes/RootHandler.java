/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto2redes;

//Imports
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 *
 * @author Eyleen y Steven
 */

//Clase handler
public class RootHandler implements HttpHandler{
    
    static final File WEB_ROOT = new File(".");

    //Método handle que recibe la URL y se obtiene la petición de la página que se está solicitando
    @Override
    public void handle(HttpExchange he) throws IOException {
        
        //Obtiene la petición. Si no hay petición, se define "index" como la petición por defecto
        String response = "" + he.getRequestURI();
        System.out.println("r: "+response);
        if (response.compareTo("/") == 0) {
            response = "/index.html";
        }
        
        //Se establece la dirección en directorio de la página solicitada
        String name = "src/Paginas" + response;
        System.out.println("nombre " + name);

        //Si la página solicitada no existe, entonces se muestra un html de error
        File file = new File(name);
        if(!file.exists()){
            file = new File("src/Paginas/Error.html");
        }
        
        //Se envían los datos al navegador
        int fileLength = (int) file.length();
        byte[] fileData = readFileData(file, fileLength);
        he.sendResponseHeaders(200, fileLength);
        OutputStream os = he.getResponseBody();
        os.write(fileData);
        os.close();
    }

    //Método que recibe un archivo, lo lee y guarda los bytes para devolverlos como respuesta al navegador
    private byte[] readFileData(File file, int fileLength) throws IOException {
        FileInputStream fileIn = null;
        byte[] fileData = new byte[fileLength];

        try {
            fileIn = new FileInputStream(file);
            fileIn.read(fileData);
        } finally {
            if (fileIn != null) {
                fileIn.close();
            }
        }

        return fileData;
    }
}
