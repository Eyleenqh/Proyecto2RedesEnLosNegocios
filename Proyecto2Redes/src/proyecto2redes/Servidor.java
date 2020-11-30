/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto2redes;

//Imports
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.security.NoSuchAlgorithmException;

/**
 *
 * @author Eyleen y Steven
 */

//Clase del servidor HTTP
public class Servidor extends Thread{

    int port = 8080;
    HttpServer server;
    
    //Método que crea y corre el servidor HTTP
    public Servidor() throws IOException, NoSuchAlgorithmException {
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("Server http en " + port);
        server.createContext("/", new RootHandler());
        server.setExecutor(null);
        server.start();
    }

}
