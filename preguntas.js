/* Proceso: Inicio Trivia
Entrada: Ingresar nombre /Imprimir bienvenida en el html con el nombre /Preguntar si desea jugar- si /no.
Proceso> Pregunta 1,2,3,4 y 5 
Salida: Puntaje final / Aciertos.
*/
window.onload = function()
  {
    //toma el identificador "nombre" y llama a la variable nombreUsuario 
    var name = localStorage.getItem("nombre");
   //llama la id del header saludo del documento html y suma el nombre del participante
    document.getElementById("saludo").innerHTML += name +"!";
   //crea una variable que responda al boton "Checa tus resultados"
    var validar = document.getElementById("validar");
    // cuando se hace click , la variable del boton (validar) llama a la funcion
    validar.onclick = function()
    
      {
        var resultado=0;
        // crea una variable de la pregunta 1 que contiene el documento del formulario llamado q1
        var q1 = document.formulario.q1;
      //encontrar la ubicacion de la respuesta chequeada donde x=0 es la 1a opcion x<q1.length es la 2 y x++ es la 3
        for (x = 0; x < q1.length; x++)
        
        {
          //si la respuesta de x esta seleccionada
          if (q1[x].checked)
          
          {
            //si el valor de la respuesta es = a la respuesta correcta se suma 1 a la variable resultado.
            if(q1[x].value == "Leviosa"){
              resultado+=1;
            }
            
          }
        }
        //se crea variable de pregunta 2 y selecciona el valor del elemento input
        var q2 = document.querySelector("input[name='q2']:checked").value;
        // si la respuesta coincide se suma 1 a la variable resultado.
        if(q2=="10"){
          resultado+=1;
        } 
         
        var q3 = document.querySelector("input[name='q3']:checked").value;
        if (q3=="Ollivanders"){
           resultado+=1;
        }
              
        var q4 = document.formulario.q4;
        for (x = 0; x < q4.length; x++)
        {
          if (q4[x].checked)
          {
            if(q4[x].value == "En las mazmorras"){
              resultado+=1;
            }     
          }
        }
      
        var q5 = document.querySelector("input[name='q5']:checked").value;
        if (q5=="Veritaserum"){
          resultado+=1
        }
        
        
      //Evaluacion va aqui
      // se crea un alert que tome el nombre que se agrego al inicio y se da la suma total de resultados correctos. 
      swal(name, " Tuviste " + resultado + " respuestas correctas de 5", 'success')
      }
      // creamos variable volver con el identificador de la etiqueta del boton de "volver a jugar" de html.
      var volver = document.getElementById("volver");
      //al dar click la funcion del evento será redireccionar el usuario al index
        volver.onclick = function()
        //llamo primero a la función
        {
          window.location.href="index.html";
        }
        carga();

  }
  //definimos la funcion carga
 function carga()
  {
    contadorS = 30;
    contadorM = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");

    cronometro = window.setInterval(
      //****** */
      function(){
        //actualiza el valor del tiempo, escribe en html el valor actual del tiempo
        s.innerHTML = contadorS;
       if(contadorM == 0){
         contadorM = 0;
         contadorS--;
         m.innerHTML = contadorM;
//no tenemos idea de porque funciona el 2 si solo son 6 numeros en 5 
         if(contadorS == -2){
           //forzamos a que el valor del tiempo sea 0 despues del if 
          s.innerHTML = "0";
          //detiene la tarea osea, el tiempo 
          clearInterval(cronometro);
          //indica en un popup el fin del cronometro
          swal("Lo sentimos","Se acabó tu tiempo",'error');
        }
      }
      
     }
     //intervalo de tiempo en miliseg para repetir la funcion
   ,1000);
   
  }

//Crear una variable resultado,Si es "correcto" en var resultado se suma 1 
