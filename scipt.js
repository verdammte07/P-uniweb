//ejercicio 1
// Al cargarse el archivo JavaScript, se muestra un mensaje
function mostrarMensaje1(){
    alert("Hola Mundo!");

// Despues del primer mensaje, se muestra otro mensaje seguido
alert("Soy el primer script");
}


//ejercicio 2
function mostrarMensaje2(){
    var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
    alert(mensaje);
}

  //ejercicio 3
  function mostrarMensaje3(){
    // Array que almacena los 12 meses del año
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Se muestra el nombre de cada mes
    alert(meses[0]);
    alert(meses[1]);
    alert(meses[2]);
    alert(meses[3]);
    alert(meses[4]);
    alert(meses[5]);
    alert(meses[6]);
    alert(meses[7]);
    alert(meses[8]);
    alert(meses[9]);
    alert(meses[10]);
    alert(meses[11]);
  }
  

  //ejercicio 4
 function mostrarMensaje4(){
    var valores = [true, 5, false, "hola", "adios", 2];

    // Cual de los 2 elementos de texto es mayor
    // Si el resultado es true, el primer texto es mayor
    var resultado = valores[3] > valores[4];
    alert(resultado);

    // Combinar valores booleanos
    var valor1 = valores[0];
    var valor2 = valores[2];

    // Obtener un resultado TRUE
    var resultado = valor1 || valor2;
    alert(resultado);

    // Obtener un resultado FALSE
    resultado = valor1 && valor2;
    alert(resultado);

    // Operaciones matemáticas
    var num1 = valores[1];
    var num2 = valores[5];

    var suma = num1 + num2;
    alert(suma);

    var resta = num1 - num2;
    alert(resta);

    var multiplicacion = num1 * num2;
    alert(multiplicacion);

    var division = num1 / num2;
    alert(division);

    var modulo = num1 % num2;
    alert(modulo);
 }

  //ejercicio 5
    function mostrarMensaje5(){
        var numero1 = 5;
    var numero2 = 8;

    if(numero1 <= numero2) {
    alert("numero1 no es mayor que numero2");
    }
    if(numero2 >= 0) {
    alert("numero2 es positivo");
    }
    if(numero1 < 0 || numero1 != 0) {
    alert("numero1 es negativo o distinto de cero");
    }
    if(++numero1 < numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
    }

  //ejercicio 6
    function mostrarMensaje6(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = prompt("Introduce tu número de DNI (sin la letra)");
    var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
    letra = letra.toUpperCase();
    
    if(numero < 0 || numero > 99999999) {
      alert("El número proporcionado no es válido");
    }
    else {
      var letraCalculada = letras[numero % 23];
      if(letraCalculada != letra) {
        alert("La letra o el número proporcionados no son correctos");
      }
      else {
        alert("El número de DNI y su letra son correctos");
      }
    }
  }

  //ejercicio 7
  function mostrarMensaje7(){
    var numero = prompt("Introduce un número y se mostrará su factorial");
    var resultado = 1;

    for(var i=1; i<=numero; i++) {
    resultado *= i;
    }
    alert(resultado);
  }

  //ejercicio 8
    function mostrarMensaje8(){
    var numero = prompt("Introduce un número entero");

    var resultado = parImpar(numero);
    alert("El número "+numero+" es "+resultado);

    function parImpar(numero) {
    if(numero % 2 == 0) {
    return "par";
    }
    else {
    return "impar";
  }
}
  }

  //ejercicio 9
  function mostrarMensaje9(){
    function info(cadena) {

        var resultado = "La cadena \""+cadena+"\" ";
      
        // Comprobar mayúsculas y minúsculas
        if(cadena == cadena.toUpperCase()) {
          resultado += " está formada sólo por mayúsculas";
        }
        else if(cadena == cadena.toLowerCase()) {
          resultado += " está formada sólo por minúsculas";
        }
        else {
          resultado += " está formada por mayúsculas y minúsculas";
        }
      
        return resultado;
        }
      
        alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
        alert(info("En un lugar de la mancha..."));
  }

  //ejercicio 10
  function mostrarMensaje10(){
        function palindromo(cadena) {

        var resultado = "La cadena \""+cadena+"\" \n";
      
        // Pasar a minusculas la cadena
        var cadenaOriginal = cadena.toLowerCase();
      
        // Convertir la cadena en un array
        var letrasEspacios = cadenaOriginal.split("");
      
        // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
        var cadenaSinEspacios = "";
        for(i in letrasEspacios) {
          if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
          }
        }
      
        var letras = cadenaSinEspacios.split("");
        var letrasReves = cadenaSinEspacios.split("").reverse();
      
        // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
        var iguales = true;
        for(i in letras) {
          if(letras[i] == letrasReves[i]) {
            // Todo bien
          }
          else {
            // Alguna letra es distinta, por lo que ya no es un palindromo
            iguales = false;
          }
        }
      
        if(iguales) {
          resultado += " es un palíndromo";
        }
        else {
          resultado += " no es un palíndromo";
        }
      
        return resultado;
      }
      
      alert(palindromo("La ruta nos aporto otro paso natural"));
      alert(palindromo("Esta frase no se parece a ningun palindromo"));
  }

//ejercicio 11
    window.onload = function() {
        var info = document.getElementById("informacion");
      
        // Numero de enlaces de la pagina
        var enlaces = document.getElementsByTagName("a");
        info.innerHTML = "Numero de enlaces = "+enlaces.length;
      
        // Direccion del penultimo enlace
        var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-0].href;
        info.innerHTML = info.innerHTML + "<br/>" + mensaje;
      
        // Numero de enlaces que apuntan a http://prueba
        var contador = 0;
        for(var i=0; i<enlaces.length; i++) {
          // Es necesario comprobar los enlaces http://prueba y
          // http://prueba/ por las diferencias entre navegadores
          if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
            contador++;
          }
        }
        info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"
      
        // Numero de enlaces del tercer párrafo
        var parrafos = document.getElementsByTagName("p");
        enlaces = parrafos[2].getElementsByTagName("a");
        info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
      }

//ejercicio 12
function muestra() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";
  
    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
  }

  //ejercicio 13
  function anade() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Elemento de prueba");
    elemento.appendChild(texto);
  
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
  
    var nuevoElemento = "<li>Texto de prueba</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
  }

  //ejercicio 14
  function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);
  
    if(elemento.style.display == "" || elemento.style.display == "block") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
  }

  //ejercicio 15
  function informacion(elEvento) {
    var evento = elEvento || window.event;
    switch(evento.type) {
      case 'mousemove':
        document.getElementById('info')
        var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
        var coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
        if(ie) {
          if(document.documentElement && document.documentElement.scrollTop){
            coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
            coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
          }
          else {
            coordenadaXabsoluta = evento.clientX + document.body.scrollLeft;
            coordenadaYabsoluta = evento.clientY + document.body.scrollTop;
          }
        }
        else {
          coordenadaXabsoluta = evento.pageX;
          coordenadaYabsoluta = evento.pageY;
        }
        coordenadaXrelativa = evento.clientX;
        coordenadaYrelativa = evento.clientY;
        muestraInformacion(['"Ratón"', 'Navegador ['+coordenadaXrelativa+', '+coordenadaYrelativa+']', 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
        break;
      case 'keypress':
        document.getElementById('info')
        var caracter = evento.charCode || evento.keyCode;
        var letra = String.fromCharCode(caracter);
        var codigo = letra.charCodeAt(0);
        muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
        break;
      case 'click':
        document.getElementById('info')
        break;
    }
  }
  
  function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) {
      document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
  }
  
  document.onmousemove = informacion;
  document.onkeypress = informacion;
  
  document.onclick = informacion;
