document.addEventListener("DOMContentLoaded",
    function(event) {

    function hola(event) {
        this.textContent = "sodomía";
    var nombre = 
        document.getElementById("nombre").value;
        var mensaje = "<h2>Hola " + nombre + " !";

    //document.ElementById("content").textContent = mensaje;

    document
        .getElementById("content")
        .innerHTML = mensaje;

    if(nombre === "culo") {
        var title = 
        document
            .querySelector("#title")
            .textContent;
        title += " Bonjour culo";
        document
            .querySelector("h1")
            .textContent = title;
        }
    }

        document.querySelector("button")
            .addEventListener("click", hola);

        document.querySelector("body")
            .addEventListener("mousemove",
                function(event) {
                /* Act on the event */
                    if (event.shiftkey === true) {
                        console.log("x: " + event.clientX);
                        console.log("y: " + event.clientY);
                }
            }
        );

    }
);

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  
  //El método charAt () devuelve el carácter en el índice especificado en una cadena.

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();

// document.querySelector("button")
//     .onclick = hola;

// function hola() {
// 	var nombre = 
//         document.getElementById("nombre").value;
//         var mensaje = "<h2>Hola " + nombre + " !";

//     //document.ElementById("content").textContent = mensaje;

//     document
//         .getElementById("content")
//         .innerHTML = mensaje;

//     if(nombre === "culo") {
//     	var title = 
//         document
//             .querySelector("#title")
//             .textContent;
//     	title += " Bonjour culo";
//     	document
//             .querySelector("h1")
//             .textContent = title;
    	
//     }
// }