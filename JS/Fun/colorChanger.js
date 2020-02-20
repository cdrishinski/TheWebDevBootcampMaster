var button = document.querySelector("button");
var isColored = false;

// button.addEventListener("click", function(){
// if(isColored){
// document.body.style.background = "white";
// } else{
// document.body.style.background = "purple";
// }
// isColored = !isColored;
// });       

button.addEventListener("click", function(){

    document.body.classList.toggle("purple");

    });       