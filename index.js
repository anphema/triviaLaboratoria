// averiguar es el nombre del boton a llamar evento
// document.getElementById sirve para obtener la etiqueta y asignarle al evento onclick una funcion. - equivalente a addEventListener("click")
// a la variable nombreUsuario se le asigna el valor (Nombre de Participante) del id "name"
//localStorage va a guardar la variable nombreUsuario dentro de "nombre" (identificador de la variable que se va a usar) - este se va a utilizar para llamar durante el saludo inicial del cuestionario.
//window.location.href redirecciona al html indicado
//se espera a que se cargue todo el html y luego procesa el codigo de js 
window.onload = function()
  {
    var averiguar = document.getElementById("averiguar");
    averiguar.onclick = function()
    {
      var nombreUsuario = document.getElementById("name").value;
      localStorage.setItem("nombre", nombreUsuario );
      window.location.href = "Preguntas.html";
    }
  }
  