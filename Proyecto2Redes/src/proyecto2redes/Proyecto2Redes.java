/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proyecto2redes;

//Imports
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.*;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
/**
 *
 * @author Eyleen y Steven
 */
public class Proyecto2Redes {

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     * @throws java.security.NoSuchAlgorithmException
     */
    
    //Método main
    public static void main(String[] args) throws IOException, NoSuchAlgorithmException, IOException, NoSuchAlgorithmException, CertificateException, UnrecoverableKeyException, KeyManagementException, FileNotFoundException, KeyStoreException, Exception {
        Servidor server = new Servidor();
        ServidorHttps serverhttps = new ServidorHttps();
    }
    
}
