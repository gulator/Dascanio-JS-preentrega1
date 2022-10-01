/* CACULADOR PRECIO GREMIO 
Se ingresa un valor de producto. Este valor corresponde al producto al consumidor final, IVA incluido.
El calculador realiza un descuento sobre dicho valor (10% para Monotributista, 19% para Responsable inscripto.)
El programa calcula cual será el precio que abonará el comercio (Gremio) sobre el producto, despues del descuento,
detallando los impuestos
*/





let monto = prompt("Valor del producto"); //Valor del producto al consumidor final, IVA incluido.
let tipoCliente = prompt("Ingrese el tipo de cliente:\nA) Monotributo\nB) Responsable Inscripto");
let aliCaba = prompt("Ingrese alicuota percepcion IIBB CABA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");
let aliArba = prompt("Ingrese alicuota percepcion IIBB ARBA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");
let aliCordoba = prompt("Ingrese alicuota percepcion IIBB CORDOBA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");



function cliente(valor, tipo) {
    let opcion;
    if (tipo == "A" || tipo == "B"){
        opcion = false;
    }
    else{
        opcion = true;
    }
    while (opcion){
        alert("Ingrese una de las dos opciones permitidas");
        tipoCliente = prompt("Ingrese el tipo de cliente:\nA) Monotributo\nB) Responsable Inscripto");
        if (tipoCliente == "A"){
        opcion = false;
        }
        else if (tipoCliente == "B"){
            opcion = false;
        }
        else{
            continue;
        }
    }
    
    if (tipo == "A") {
        return (valor * (1-0.9));
    }
    else{
        return (valor * (1-0.81))
    }
    
}


function caba(valor, a) {
    let tipoAlicuota = a;
    while (true){
        if (typeof(valor) == "number" && typeof (tipoAlicuota) == "string"){
            if (tipoAlicuota == "A"){
                return (0);
            }
            else if (tipoAlicuota == "B"){
                return (valor * 0.005);
            }
            else if (tipoAlicuota == "C"){
                return (valor * 0.0075);
            }
            else if (tipoAlicuota == "D"){
                return (valor * 0.01);
            }
            else{
                alert ("Debes ingresar: A, B, C o D");
                let alicuota = prompt("Ingrese alicuota percepcion IIBB CABA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");
                if (alicuota == "A", "B", "C", "D"){
                    tipoAlicuota = alicuota
                }
            }
        }        
    }
}


function arba(valor, b) {
    let tipoAlicuota = b;
    while (true){
        
        if (typeof(valor) == "number" && typeof (tipoAlicuota) == "string"){
            if (tipoAlicuota == "A"){
                return (0);
            }
            else if (tipoAlicuota == "B"){
                return (valor * 0.005);
            }
            else if (tipoAlicuota == "C"){
                return (valor * 0.0075);
            }
            else if (tipoAlicuota == "D"){
                return (valor * 0.01);
            }
            else{
                alert ("Debes ingresar: A, B, C o D");
                let alicuota = prompt("Ingrese alicuota percepcion IIBB ARBA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");
                if (alicuota == "A", "B", "C", "D"){
                    tipoAlicuota = alicuota
                    
                }
            }
        }        
    }
}


function cordoba(valor, c) {
    let tipoAlicuota = c;
    while (true){
        if (typeof(valor) == "number" && typeof (tipoAlicuota) == "string"){
            if (tipoAlicuota == "A"){
                return (0);
            }
            else if (tipoAlicuota == "B"){
                return (valor * 0.005);
            }
            else if (tipoAlicuota == "C"){
                return (valor * 0.0075);
            }
            else if (tipoAlicuota == "D"){
                return (valor * 0.01);
            }
            else{
                alert ("Debes ingresar: A, B, C o D");
                let alicuota = prompt("Ingrese alicuota percepcion IIBB CORDOBA:\nA) 0.0%\nB) 0.5%\nC) 0.75%\nD) 1.0%");
                if (alicuota == "A", "B", "C", "D"){
                    tipoAlicuota = alicuota
                }
            }
        }
        
    }
}

function iva(valor) {
    return (valor * 0.21);
}

function chkMonto (valor){
    let importe = valor    
    while(true){
    if (isNaN(importe) == true){
            alert("Debe ingresar un número");
            importe = parseFloat(prompt("Valor del producto"));
            }
    else{
        return (importe)
        }           
    }
}

let montoChk = chkMonto(parseFloat(monto));

let gremio = (montoChk - cliente(montoChk, tipoCliente)) / 1.21;

let percepCaba = caba(gremio, aliCaba);
let percepArba = arba(gremio, aliArba);
let percepCordoba = cordoba(gremio, aliCordoba);

let percepciones = percepCaba + percepArba + percepCordoba;
let impuesto = iva(gremio);

console.log("-- Detalle -- ");
console.log("Precio del producto (gremio): $", gremio);
console.log("IVA: $", impuesto);
console.log("Percep. IIBB Caba: $", percepCaba);
console.log("Percep. IIBB Arba: $", percepArba);
console.log("Percep. IIBB Cordoba: $", percepCordoba);
console.log("Total Precio Producto: $", parseFloat(gremio + impuesto + percepciones));