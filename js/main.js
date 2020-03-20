import Controller from './controller/controller.js';

let a = new Controller();

var w;
var text =  document.querySelector('#before');

if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("./js/worker.js");
    }
    text.onkeydown= function (event){
        w.postMessage(text.value);
    }
    w.onmessage = function(event) {  
      document.getElementById("count_symb").innerHTML = event.data;
    }
} 
else {
    alert("Sorry, your browser does not support Web Workers...");
}