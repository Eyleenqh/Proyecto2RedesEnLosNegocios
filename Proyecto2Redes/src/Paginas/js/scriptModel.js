//modal
let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

let modal2 = document.getElementById('miModal2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('abrir2');
let cerrar2 = document.getElementById('close2');

let modal3 = document.getElementById('miModal3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('abrir3');
let cerrar3 = document.getElementById('close3');

let modal4 = document.getElementById('miModal4');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('abrir4');
let cerrar4 = document.getElementById('close4');
//listeners del modal
abrir.addEventListener('mouseover', function () {
    modal.style.display = 'block';
});
abrir.addEventListener('click', function () {
    modal.style.display = 'block';
});
cerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});

abrir2.addEventListener('mouseover', function () {
    modal2.style.display = 'block';
});
abrir2.addEventListener('click', function () {
    modal2.style.display = 'block';
});

cerrar2.addEventListener('click', function () {
    modal2.style.display = 'none';
});

abrir3.addEventListener('mouseover', function () {
    modal3.style.display = 'block';
});
abrir3.addEventListener('click', function () {
    modal3.style.display = 'block';
});
cerrar3.addEventListener('click', function () {
    modal3.style.display = 'none';
});

abrir4.addEventListener('mouseover', function () {
    modal4.style.display = 'block';
});
abrir4.addEventListener('click', function () {
    modal4.style.display = 'block';
});
cerrar4.addEventListener('click', function () {
    modal4.style.display = 'none';
});
window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target === flex) {
        modal.style.display = 'none';
    }
    if (e.target === flex2) {
        modal2.style.display = 'none';
    }
    if (e.target === flex3) {
        modal3.style.display = 'none';
    }
    if (e.target === flex4) {
        modal4.style.display = 'none';
    }
});
//fin modal

function llenarVentana(promo) {
    if (promo === "promo1") {
        llenarPromo1();
    }
    if (promo === "promo2") {
        llenarPromo2();
    }
    if (promo === "promo3") {
        llenarPromo3();
    }
    if (promo === "promo4") {
        llenarPromo4();
    }
}

function llenarPromo1() {
    var elementoLog = document.getElementById("tituloModal");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Promoción Pollo y Papas");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionPromo");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Lleva 10 piezas de pollo, más 5 porciones de papas fritas.");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("precioPromo");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Precio: ₡10500");
    elementoLog.appendChild(nodoN);

    var elementimg = document.getElementById("imgm1");
    var p1 = "<img src=img/promociones/promocion1.png alt='' width='265' height='206'>";
    elementimg.innerHTML = p1;
}
function llenarPromo2() {
    var elementoLog = document.getElementById("tituloModal2");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Promoción Hamburguesas y Refrescos");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionPromo2");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Lleva 2 Hamburguesas y te puedes llevar gratis dos refrescos.");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("precioPromo2");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Precio: ₡5000");
    elementoLog.appendChild(nodoN);

    var elementimg = document.getElementById("imgm2");
    var p1 = "<img src=img/promociones/promocion2.png alt='' width='265' height='206'>";
    elementimg.innerHTML = p1;
}
function llenarPromo3() {
    var elementoLog = document.getElementById("tituloModal3");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Promoción 2 X 3");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionPromo3");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Por la compra de dos pizzas tamaño familiar te puedes llevar una más gratis.");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("precioPromo3");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Precio: ₡21400");
    elementoLog.appendChild(nodoN);

    var elementimg = document.getElementById("imgm3");
    var p1 = "<img src=img/promociones/promocion3.png alt='' width='265' height='206'>";
    elementimg.innerHTML = p1;
}
function llenarPromo4() {
    var elementoLog = document.getElementById("tituloModal4");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Oferta de Wantan");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("descripcionPromo4");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Por la compra de un Wanta, una copa de Helado y un Refresco, pagas la mitad del pago total.");
    elementoLog.appendChild(nodoN);

    var elementoLog = document.getElementById("precioPromo4");
    elementoLog.innerHTML = "";
    var nodoN = document.createTextNode("Precio: ₡2475");
    elementoLog.appendChild(nodoN);

    var elementimg = document.getElementById("imgm4");
    var p1 = "<img src=img/promociones/promocion4.png alt='' width='265' height='206'>";
    elementimg.innerHTML = p1;
}
