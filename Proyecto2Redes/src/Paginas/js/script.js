//variables globales
var arregloRestaurantes = ['R. La Feria', 'R. N. Hong Kong', 'R. Mundo de Sabores', 'R. Rostizados', 'R. La Garza'];
var arregloLaFeria = [3000, 3500, 2500, 1000, 4000];
var arregloHongKong = [3700, 3000, 2600, 2200, 1950];
var arregloMundoSabores = [22550, 26500, 3000, 2600, 2500];
var arregloRostizados = [3400, 3550, 3900, 10700, 5600];
var arregloLaGarza = [3500, 2500, 4200, 16500, 1500];
//funciones para el char
function obtenerRestaurantes() {
    return arregloRestaurantes;
}
function mayoresPrecios() {
    var precios = [0, 0, 0, 0, 0];
    for (var i = 1; i < arregloLaFeria.length; i++) {
        if (arregloLaFeria[i] > precios[0])
            precios[0] = arregloLaFeria[i];
    }
    for (var i = 1; i < arregloHongKong.length; i++) {
        if (arregloHongKong[i] > precios[1])
            precios[1] = arregloHongKong[i];
    }
    for (var i = 1; i < arregloMundoSabores.length; i++) {
        if (arregloMundoSabores[i] > precios[2])
            precios[2] = arregloMundoSabores[i];
    }
    for (var i = 1; i < arregloRostizados.length; i++) {
        if (arregloRostizados[i] > precios[3])
            precios[3] = arregloRostizados[i];
    }
    for (var i = 1; i < arregloLaGarza.length; i++) {
        if (arregloLaGarza[i] > precios[4])
            precios[4] = arregloLaGarza[i];
    }
    return precios;
}
//confirma la solicitud de un pedido
function confirmar() {
    var ex=new RegExp(/^([0-9]+){8}$/);
    var telefono = document.getElementById("telefono");

    if (localStorage.getItem("total") === "0" || localStorage.getItem("total") === 0 || localStorage.getItem("total") === "undefined") {
        alert("Pedido fallo. No han agregado productos");
        return false;
    } else {
        var t=ex.test(telefono.value);
        if (t) {
            localStorage.setItem("listaProductos", "");
            localStorage.setItem("total", 0);
            alert("Pedido realizado");
            location.href = "index.html";
            event.preventDefault();
            return true;
        } else {
            alert("Numero de telefono incorrecto");
            return false;
        }
    }
}
//llama funciones para agregar los productos pedidos
function agregarProductos(btn) {
    if (btn === "promo1" || btn === "promo2" || btn === "promo3" || btn === "promo4") {
        productosPromociones(btn);
    } else {
        productosRestaurantes(btn);
    }
}
//Obtiene productos de la promociones
function productosPromociones(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "promo1") {
        producto = "Promoción Pollo y Papas";
        precio = 10500;
    }
    if (btn === "promo2") {
        producto = "Promoción Hamburguesas y Refrescos";
        precio = 5000;
    }
    if (btn === "promo3") {
        producto = "Promoción 2 X 3";
        precio = 21400;
    }
    if (btn === "promo4") {
        producto = "Oferta de Wantan";
        precio = 2475;
    }
    agrega(producto, precio);
}
//Obtiene productos de los restaurantes
function productosRestaurantes(btn) {
    var res = document.getElementById("nombrer").textContent;
    if (res === "Restaurante La Feria") {
        productosLaFeria(btn);
    }
    if (res === "Restaurante Mundo de Sabores") {
        productosSabores(btn);
    }
    if (res === "Restaurante nuevo Hong Kong") {
        productosHongK(btn);
    }
    if (res === "Restaurante Rostizados") {
        productosRostizados(btn);
    }
    if (res === "Restaurante La Garza") {
        productosLaGarza(btn);
    }
}
//productos pedidos
function productosLaFeria(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "boton1") {
        producto = "Casado";
        precio = 3000;
    }
    if (btn === "boton2") {
        producto = "Olla de Carne";
        precio = 3500;
    }
    if (btn === "boton3") {
        producto = "Patacones con frijoles molidos";
        precio = 2500;
    }
    if (btn === "boton4") {
        producto = "Torta Chilena";
        precio = 1000;
    }
    if (btn === "boton5") {
        producto = "Tortilla Española";
        precio = 4000;
    }
    agrega(producto, precio);
}
function productosSabores(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "boton1") {
        producto = "Salpicon de Mariscos con Mejillones";
        precio = 22550;
    }
    if (btn === "boton2") {
        producto = "Mariscada";
        precio = 26500;
    }
    if (btn === "boton3") {
        producto = "Filete de pescado con papas fritas y ensalada";
        precio = 3000;
    }
    if (btn === "boton4") {
        producto = "Tilapia con lechuga y tomate";
        precio = 2600;
    }
    if (btn === "boton5") {
        producto = "Arroz con pollo y papas fritas";
        precio = 2500;
    }
    agrega(producto, precio);
}
function productosHongK(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "boton1") {
        producto = "Arroz con Camarones";
        precio = 3700;
    }
    if (btn === "boton2") {
        producto = "Arroz cantones con ensalada";
        precio = 3000;
    }
    if (btn === "boton3") {
        producto = "Tostada de ceviche de pescado";
        precio = 2600;
    }
    if (btn === "boton4") {
        producto = "Wantan acompañado con salsa";
        precio = 2200;
    }
    if (btn === "boton5") {
        producto = "Copa de helado";
        precio = 1950;
    }
    agrega(producto, precio);
}
function productosRostizados(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "boton1") {
        producto = "Pollo frito con papas fritas";
        precio = 3400;
    }
    if (btn === "boton2") {
        producto = "Alitas de pollo en salsa BBQ con papas fritas";
        precio = 3550;
    }
    if (btn === "boton3") {
        producto = "Popcorns de pollo";
        precio = 2900;
    }
    if (btn === "boton4") {
        producto = "Pizza de jamón y queso";
        precio = 10700;
    }
    if (btn === "boton5") {
        producto = "Nachos con queso y carne";
        precio = 5600;
    }
    agrega(producto, precio);
}
function productosLaGarza(btn) {
    var producto = "";
    var precio = 0;
    if (btn === "boton1") {
        producto = "Pollo empanizado, con papas fritas y ensalada";
        precio = 3500;
    }
    if (btn === "boton2") {
        producto = "Hamburguesa especial";
        precio = 2500;
    }
    if (btn === "boton3") {
        producto = "Camarones fritos con papas asadas y ensalada";
        precio = 4200;
    }
    if (btn === "boton4") {
        producto = "Chicharrones con patacones y frijoles molidos";
        precio = 16500;
    }
    if (btn === "boton5") {
        producto = "Sandwich club";
        precio = 1500;
    }
    agrega(producto, precio);
}
//agregar los productos solicitados a memoria temporal
function agrega(producto, precio) {
    var productoAgregar = "  Producto: ".concat(producto.concat(" Precio: ".concat(precio)));
    var total = localStorage.getItem("total");
    if (total === "undefined" || total === 0 || total === "0") {
        localStorage.setItem("listaProductos", productoAgregar);
        localStorage.setItem("total", precio);
    } else {
        var producto = localStorage.getItem("listaProductos");
        productoAgregar = productoAgregar.concat("/".concat(producto));
        localStorage.setItem("listaProductos", productoAgregar);
        localStorage.setItem("total", parseInt(precio) + parseInt(total));
    }
}
//Agrega productos solictados y totales a carritoCompras.html
function lista() {
    var listaProductos = localStorage.getItem("listaProductos").toString();
    if (listaProductos !== "") {
        var elementoLog = document.getElementById("productos");
        var producto = listaProductos.split("/");
        for (var i = 0; i < producto.length; i++) {
            var nuevoNodo = document.createTextNode(producto[i]);
            elementoLog.appendChild(nuevoNodo);
        }
        var elementoT = document.getElementById("total");
        var nodoTotal = document.createTextNode("Precio total de la compra= ".concat(localStorage.getItem("total").toString()));
        elementoT.appendChild(nodoTotal);

        var elementoT = document.getElementById("totalImpuestos");
        var total = localStorage.getItem("total");
        var total = parseInt(total) + parseInt(total) * 0.13 + 1000;
        var nodoTotal = document.createTextNode("Precio total de la compra con impuestos= ".concat(total));
        elementoT.appendChild(nodoTotal);
    }
}
//Hace llamado para ingresar contenido
function ingresaContenido(nombre) {
    document.getElementById('nombrer').innerHTML = '';
    document.getElementById('descripcionr').innerHTML = '';
    document.getElementById('horarior').innerHTML = '';
    document.getElementById('ubicacionr').innerHTML = '';
    document.getElementById('mapa').innerHTML = '';
    document.getElementById('menu').innerHTML = '';
    document.getElementById('boton1').innerHTML = '';
    document.getElementById('boton2').innerHTML = '';
    document.getElementById('boton3').innerHTML = '';
    document.getElementById('boton4').innerHTML = '';
    document.getElementById('boton5').innerHTML = '';
    if (nombre === "restaurante La Feria") {
        restaurante1();
    }
    if (nombre === "restaurante Mundo de Sabores") {
        restaurante2();
    }
    if (nombre === "restaurante Nuevo Hong Kong") {
        restaurante3();
    }
    if (nombre === "restaurante Rostizados") {
        restaurante4();
    }
    if (nombre === "restaurante La Garza") {
        restaurante5();
    }
    ingresaBotones();
}
//Botones de los productos
function ingresaBotones() {
    var formb = document.getElementById("boton1");
    var nombre = "";
    for (var i = 1; i <= 5; i++) {
        nombre = "boton".concat(i);
        formb = document.getElementById(nombre);
        var button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'Comprar';
        formb.appendChild(button);
    }
}
//Iniciar el mapa
function initMap(latitud, longitud) {
    var latlng = {lat: latitud, lng: longitud};
    var mapProp = {center: new google.maps.LatLng(latitud, longitud), zoom: 19};
    var map = new google.maps.Map(document.getElementById('mapa'), mapProp);
    var marker = new google.maps.Marker({position: latlng, map: map});
}
//Ingresan la informacion de cada restaurante
function restaurante1() {
    var elementoLog = document.getElementById("nombrer");
    var nodoN = document.createTextNode("Restaurante La Feria");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionr");
    var nodoD = document.createTextNode("Este es un restaurante con un variedad de platillos deliciosos, lo que se pueden ir a disfrutar en familia.");
    elementoLog.appendChild(nodoD);

    var elementoLog = document.getElementById("ubicacionr");
    var nodoU = document.createTextNode("Ubicación: Provincia de Cartago, Turrialba");
    elementoLog.appendChild(nodoU);

    var elementoLog = document.getElementById("horarior");
    var nodoH = document.createTextNode("Horario: Todos los días de 11:00 a.m. hasta las 10:00 p.m.");
    elementoLog.appendChild(nodoH);

    initMap(9.904598, -83.686048);
    //productos
    var elementoLog = document.getElementById("menu");
    var nodoM = document.createTextNode("Menú");
    elementoLog.appendChild(nodoM);

    var elementop = document.getElementById("p1");
    var p1 = "<p><b>Casado</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3000</p> ";
    elementop.innerHTML = p1;

    var elemento1 = document.getElementById("img1");
    var im = "<img src=img/feria/1.jpg alt='' width='270' height='230'>";
    elemento1.innerHTML = im;

    var elementop = document.getElementById("p2");
    var p2 = "<p><b>Olla de carne</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3500</p> ";
    elementop.innerHTML = p2;

    var elemento2 = document.getElementById("img2");
    var im = "<img src=img/feria/2.jpg alt='' width='270' height='230'>";
    elemento2.innerHTML = im;

    var elementop = document.getElementById("p3");
    var p3 = "<p><b>Patacones con frijoles molidos</b></p> </br> <p>Tamaño: 2 porciones Precio: ₡2500</p> ";
    elementop.innerHTML = p3;

    var elemento3 = document.getElementById("img3");
    var im = "<img src=img/feria/3.jpg alt='' width='270' height='230'>";
    elemento3.innerHTML = im;

    var elementop = document.getElementById("p4");
    var p4 = "<p><b>Torta Chilena</b></p> </br> <p>Tamaño: 1 porción Precio: ₡1000</p> ";
    elementop.innerHTML = p4;

    var elemento4 = document.getElementById("img4");
    var im = "<img src=img/feria/4.jpg alt='' width='270' height='230'>";
    elemento4.innerHTML = im;

    var elementop = document.getElementById("p5");
    var p5 = "<p><b>Tortilla Española</b></p> </br> <p>Tamaño: 1 porción Precio: ₡4000</p> ";
    elementop.innerHTML = p5;

    var elemento5 = document.getElementById("img5");
    var im = "<img src=img/feria/5.jpg alt='' width='270' height='230'>";
    elemento5.innerHTML = im;
}

function restaurante2() {
    var elementoLog = document.getElementById("nombrer");
    var nodoN = document.createTextNode("Restaurante Mundo de Sabores");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionr");
    var nodoD = document.createTextNode("Este es un restaurante con un variedad de platillos deliciosos y su especialidad son los mariscos, aunque también cuenta con otros tipos de comida.");
    elementoLog.appendChild(nodoD);

    var elementoLog = document.getElementById("ubicacionr");
    var nodoU = document.createTextNode("Ubicación: Calle 0, Provincia de Cartago, Turrialba");
    elementoLog.appendChild(nodoU);

    var elementoLog = document.getElementById("horarior");
    var nodoH = document.createTextNode("Horario: Todos los días de 9:00 a.m. hasta las 11:00 p.m.");
    elementoLog.appendChild(nodoH);

    initMap(9.904368, -83.683543);
    //productos
    var elementoLog = document.getElementById("menu");
    var nodoM = document.createTextNode("Menú");
    elementoLog.appendChild(nodoM);

    var elementop = document.getElementById("p1");
    var p1 = "<p><b>Salpicon de Mariscos con Mejillones</b></p> </br> <p>Tamaño: 5 personas Precio: ₡22550</p> ";
    elementop.innerHTML = p1;

    var elemento1 = document.getElementById("img1");
    var im = "<img src=img/sabores/1.jpg alt='' width='270' height='230'>";
    elemento1.innerHTML = im;

    var elementop = document.getElementById("p2");
    var p2 = "<p><b>Mariscada</b></p> </br> <p>Tamaño: 6 personas Precio: ₡26500</p> ";
    elementop.innerHTML = p2;

    var elemento2 = document.getElementById("img2");
    var im = "<img src=img/sabores/2.jpg alt='' width='270' height='230'>";
    elemento2.innerHTML = im;

    var elementop = document.getElementById("p3");
    var p3 = "<p><b>Filete de pescado con papas fritas y ensalada</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3000</p> ";
    elementop.innerHTML = p3;

    var elemento3 = document.getElementById("img3");
    var im = "<img src=img/sabores/3.jpg alt='' width='270' height='230'>";
    elemento3.innerHTML = im;

    var elementop = document.getElementById("p4");
    var p4 = "<p><b>Tilapia con lechuga y tomate</b></p> </br> <p>Tamaño: 1 porción Precio: ₡2600</p> ";
    elementop.innerHTML = p4;

    var elemento4 = document.getElementById("img4");
    var im = "<img src=img/sabores/4.png alt='' width='270' height='230'>";
    elemento4.innerHTML = im;

    var elementop = document.getElementById("p5");
    var p5 = "<p><b>Arroz con pollo y papas fritas</b></p> </br> <p>Tamaño: 1 porción Precio: ₡2500</p> ";
    elementop.innerHTML = p5;

    var elemento5 = document.getElementById("img5");
    var im = "<img src=img/sabores/5.jpg alt='' width='270' height='230'>";
    elemento5.innerHTML = im;
}

function restaurante3() {
    var elementoLog = document.getElementById("nombrer");
    var nodoN = document.createTextNode("Restaurante nuevo Hong Kong");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionr");
    var nodoD = document.createTextNode("Este es un restaurante con un variedad de platillos deliciosos, recomendable para ir con niños, cuenta con un ambiente agradable e informal.");
    elementoLog.appendChild(nodoD);

    var elementoLog = document.getElementById("ubicacionr");
    var nodoU = document.createTextNode("Ubicación: Provincia de Cartago, Turrialba");
    elementoLog.appendChild(nodoU);

    var elementoLog = document.getElementById("horarior");
    var nodoH = document.createTextNode("Horario: Lunes, Martes, Jueves, Viernes, Sabados y Domingo de 11:00 a.m. hasta las 10:30 p.m.");
    elementoLog.appendChild(nodoH);

    initMap(9.906025, -83.683417);
    //productos
    var elementoLog = document.getElementById("menu");
    var nodoM = document.createTextNode("Menú");
    elementoLog.appendChild(nodoM);

    var elementop = document.getElementById("p1");
    var p1 = "<p><b>Arroz con Camarones</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3700</p> ";
    elementop.innerHTML = p1;

    var elemento1 = document.getElementById("img1");
    var im = "<img src=img/hk/1.jpg alt='' width='270' height='230'>";
    elemento1.innerHTML = im;

    var elementop = document.getElementById("p2");
    var p2 = "<p><b>Arroz cantones con ensalada</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3000</p> ";
    elementop.innerHTML = p2;

    var elemento2 = document.getElementById("img2");
    var im = "<img src=img/hk/2.jpg alt='' width='270' height='230'>";
    elemento2.innerHTML = im;

    var elementop = document.getElementById("p3");
    var p3 = "<p><b>Tostada de ceviche de pescado</b></p> </br> <p>Tamaño: 3 porciones Precio: ₡2600</p> ";
    elementop.innerHTML = p3;

    var elemento3 = document.getElementById("img3");
    var im = "<img src=img/hk/3.jpg alt='' width='270' height='230'>";
    elemento3.innerHTML = im;

    var elementop = document.getElementById("p4");
    var p4 = "<p><b>Wantan acompañado con salsa</b></p> </br> <p>Tamaño: 1 porción Precio: ₡2200</p> ";
    elementop.innerHTML = p4;

    var elemento4 = document.getElementById("img4");
    var im = "<img src=img/hk/4.jpg alt='' width='270' height='230'>";
    elemento4.innerHTML = im;

    var elementop = document.getElementById("p5");
    var p5 = "<p><b>Copa de helado</b></p> </br> <p>Tamaño: 1 porción Precio: ₡1950</p> ";
    elementop.innerHTML = p5;

    var elemento5 = document.getElementById("img5");
    var im = "<img src=img/hk/5.jpg alt='' width='270' height='230'>";
    elemento5.innerHTML = im;
}

function restaurante4() {
    var elementoLog = document.getElementById("nombrer");
    var nodoN = document.createTextNode("Restaurante Rostizados");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionr");
    var nodoD = document.createTextNode("Este es un restaurante con un variedad de platillos deliciosos, recomendable para ir con niños, cuenta con un ambiente agradable e informal y se brinda una excelente atención al cliente");
    elementoLog.appendChild(nodoD);

    var elementoLog = document.getElementById("ubicacionr");
    var nodoU = document.createTextNode("Ubicación: Calle 1, Provincia de Cartago, Turrialba");
    elementoLog.appendChild(nodoU);

    var elementoLog = document.getElementById("horarior");
    var nodoH = document.createTextNode("Horario: Todos los días de 10:00 a.m. hasta las 10:00 p.m.");
    elementoLog.appendChild(nodoH);

    initMap(9.904985, -83.682808);
    //productos
    var elementoLog = document.getElementById("menu");
    var nodoM = document.createTextNode("Menú");
    elementoLog.appendChild(nodoM);

    var elementop = document.getElementById("p1");
    var p1 = "<p><b>Pollo frito con papas fritas</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3400</p> ";
    elementop.innerHTML = p1;

    var elemento1 = document.getElementById("img1");
    var im = "<img src=img/rostizados/1.jpg alt='' width='270' height='230'>";
    elemento1.innerHTML = im;

    var elementop = document.getElementById("p2");
    var p2 = "<p><b>Alitas de pollo en salsa BBQ con papas fritas</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3550</p> ";
    elementop.innerHTML = p2;

    var elemento2 = document.getElementById("img2");
    var im = "<img src=img/rostizados/2.jpg alt='' width='270' height='230'>";
    elemento2.innerHTML = im;

    var elementop = document.getElementById("p3");
    var p3 = "<p><b>Popcorns de pollo</b></p> </br> <p>Tamaño: 2 porciones Precio: ₡3900</p> ";
    elementop.innerHTML = p3;

    var elemento3 = document.getElementById("img3");
    var im = "<img src=img/rostizados/3.jpg alt='' width='270' height='230'>";
    elemento3.innerHTML = im;

    var elementop = document.getElementById("p4");
    var p4 = "<p><b>Pizza de jamón y queso</b></p> </br> <p>Tamaño: Familiar Precio: ₡10700</p> ";
    elementop.innerHTML = p4;

    var elemento4 = document.getElementById("img4");
    var im = "<img src=img/rostizados/4.jpeg alt='' width='270' height='230'>";
    elemento4.innerHTML = im;

    var elementop = document.getElementById("p5");
    var p5 = "<p><b>Nachos con queso y carne</b></p></br><p>Tamaño: 2 personas Precio: ₡5600</p> ";
    elementop.innerHTML = p5;

    var elemento5 = document.getElementById("img5");
    var im = "<img src=img/rostizados/5.png alt='' width='270' height='230'>";
    elemento5.innerHTML = im;
}

function restaurante5() {
    var elementoLog = document.getElementById("nombrer");
    var nodoN = document.createTextNode("Restaurante La Garza");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionr");
    var nodoD = document.createTextNode("Este es un restaurante con un variedad de platillos caseros y cuenta con buen ambiente.");
    elementoLog.appendChild(nodoD);

    var elementoLog = document.getElementById("ubicacionr");
    var nodoU = document.createTextNode("Ubicación: Turrialba Costado Parque Central Quesada Casal, Provincia de Cartago, Turrialba, 30501");
    elementoLog.appendChild(nodoU);

    var elementoLog = document.getElementById("horarior");
    var nodoH = document.createTextNode("Horario: Todos los días de 10:00 a.m. hasta las 2:00 a.m.");
    elementoLog.appendChild(nodoH);

    initMap(9.906310, -83.684881);
    //productos
    var elementoLog = document.getElementById("menu");
    var nodoM = document.createTextNode("Menú");
    elementoLog.appendChild(nodoM);

    var elementop = document.getElementById("p1");
    var p1 = "<p><b>Pollo empanizado, con papas fritas y ensalada</b></p> </br> <p>Tamaño: 1 porción Precio: ₡3500</p> ";
    elementop.innerHTML = p1;

    var elemento1 = document.getElementById("img1");
    var im = "<img src=img/garza/1.PNG alt='' width='270' height='230'>";
    elemento1.innerHTML = im;

    var elementop = document.getElementById("p2");
    var p2 = "<p><b>Hamburguesa especial</b></p> </br> <p>Contiene: dos tortas, tocineta, papas, jamón, queso, lechuga, tomate, pepinillos y salsas, incluye refresco. Tamaño: 1 porción Precio: ₡2500</p> ";
    elementop.innerHTML = p2;

    var elemento2 = document.getElementById("img2");
    var im = "<img src=img/garza/2.jpg alt='' width='270' height='230'>";
    elemento2.innerHTML = im;

    var elementop = document.getElementById("p3");
    var p3 = "<p><b>Camarones fritos con papas asadas y ensalada</b></p> </br> <p>Tamaño: 1 porción Precio: ₡4200</p> ";
    elementop.innerHTML = p3;

    var elemento3 = document.getElementById("img3");
    var im = "<img src=img/garza/3.jpg alt='' width='270' height='230'>";
    elemento3.innerHTML = im;

    var elementop = document.getElementById("p4");
    var p4 = "<p><b>Chicharrones con patacones y frijoles molidos</b></p> </br> <p>Tamaño: 5 personas Precio: ₡16500 </p> ";
    elementop.innerHTML = p4;

    var elemento4 = document.getElementById("img4");
    var im = "<img src=img/garza/4.PNG alt='' width='270' height='230'>";
    elemento4.innerHTML = im;

    var elementop = document.getElementById("p5");
    var p5 = "<p><b>Sandwich club</b></p> </br> <p>Esta relleno de pollo, jamón, queso, lechuga, tocineta y tomate. Tamaño: 2 porciones Precio: ₡1500 </p> ";
    elementop.innerHTML = p5;

    var elemento5 = document.getElementById("img5");
    var im = "<img src=img/garza/5.jpg alt='' width='270' height='230'>";
    elemento5.innerHTML = im;
}
//funcion simple del landing
function correoLanding() {
    var email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
    var correo=document.getElementById("entCorreo").value;
    var resultado=email.test(correo);
    if (document.getElementById("entCorreo").value !== "") {
       if(resultado){
        alert("Registro completado");
    }else{
        alert("El correo ingresado es incorreto");
    }
    } else {
        alert("No hay ingresado información");
    }
}