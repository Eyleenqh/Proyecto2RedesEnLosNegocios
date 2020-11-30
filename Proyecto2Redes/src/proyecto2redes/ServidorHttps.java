package proyecto2redes;

//Imports
import java.io.*;
import java.net.InetSocketAddress;
import java.lang.*;
import com.sun.net.httpserver.HttpsServer;
import java.security.KeyStore;
import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.TrustManagerFactory;
import com.sun.net.httpserver.*;
import javax.net.ssl.SSLEngine;
import javax.net.ssl.SSLParameters;

import javax.net.ssl.SSLContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpsExchange;
import java.security.cert.Certificate;

/**
 *
 * @author Eyleen y Steven
 */

//Clase del servidor HTTPS
public class ServidorHttps {

    //Clase handler
    public static class MyHandler implements HttpHandler {

        //Método handle que recibe la URL y se obtiene la petición de la página que se está solicitando
        @Override
        public void handle(HttpExchange hpe) throws IOException {
            
            //Obtiene la petición. Si no hay petición, se define "index" como la petición por defecto
            HttpsExchange t = (HttpsExchange) hpe;
            String response = "" + t.getRequestURI();
            System.out.println("s: " + response);
            if (response.compareTo("/") == 0) {
                response = "/index.html";
            }

            //Se establece la dirección en directorio de la página solicitada
            String name = "src/Paginas" + response;
            System.out.println("nombre " + name);

            //Si la página solicitada no existe, entonces se muestra un html de error
            File file = new File(name);
            if (!file.exists()) {
                file = new File("src/Paginas/Error.html");
            }
            
            //Se envían los datos al navegador
            int fileLength = (int) file.length();
            byte[] fileData = readFileData(file, fileLength);
            t.sendResponseHeaders(200, fileLength);
            OutputStream os = t.getResponseBody();
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

    // Creación del servidor HTTPS
    public ServidorHttps() throws Exception {
        try {
            // Se inicializa el socket con el puerto al cual escuchará
            InetSocketAddress address = new InetSocketAddress(9000);

            // Se inicializa el servidor
            HttpsServer httpsServer = HttpsServer.create(address, 0);
            SSLContext sslContext = SSLContext.getInstance("TLS");

            // Se carga el certificado RSA que se ha creado
            String keystoreFilename = "C:/Program Files/Java/jdk1.8.0_261/bin/key.jks";
            char[] storepass = "123456".toCharArray();
            char[] keypass = "123456".toCharArray();
            String alias = "alias";
            FileInputStream fIn = new FileInputStream(keystoreFilename);
            KeyStore keystore = KeyStore.getInstance("JKS");
            keystore.load(fIn, storepass);
            
            //Muestra el certificado
            Certificate cert = keystore.getCertificate(alias);
            System.out.println(cert);
            
            KeyManagerFactory kmf = KeyManagerFactory.getInstance("SunX509");
            kmf.init(keystore, keypass);
            
            TrustManagerFactory tmf = TrustManagerFactory.getInstance("SunX509");
            tmf.init(keystore);

            // Se crea el contexto HTTPS
            sslContext.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);
            httpsServer.setHttpsConfigurator(new HttpsConfigurator(sslContext) {
                public void configure(HttpsParameters params) {
                    try {
                        // Se inicializa el contexto SSL
                        SSLContext c = SSLContext.getDefault();
                        SSLEngine engine = c.createSSLEngine();
                        params.setNeedClientAuth(false);
                        params.setCipherSuites(engine.getEnabledCipherSuites());
                        params.setProtocols(engine.getEnabledProtocols());
                        
                        SSLParameters defaultSSLParameters = c.getDefaultSSLParameters();
                        params.setSSLParameters(defaultSSLParameters);

                    } catch (Exception ex) {
                        System.out.println("Failed to create HTTPS port");
                    }
                }
            });
             System.out.println("Server https en 9000");
             
            httpsServer.createContext("/", new MyHandler());
            httpsServer.setExecutor(null);
            httpsServer.start();

        } catch (Exception exception) {
            System.out.println("Failed to create HTTPS server on port " + 9000 + " of localhost");
            exception.printStackTrace();

        }
    }
}
