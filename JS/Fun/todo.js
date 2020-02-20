// window.setTimeout(function() {
//     // put all of your JS code from the lecture here
//   }, 500);

var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here

let input = prompt("What do you want to do?");

while (input !== "quit") {

    if(input ==="list") {
        listTodos();
    }
    else if (input === "new") {
        newTodo();
    }
    else if (input === "delete"){
     deleteTodo();
    }

    input = prompt("What do you want to do?");

}
console.log("OK, YOU QUIT THE APP");

//function called above
function listTodos() {
    console.log("**********");

    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    })

    console.log("**********");

}

function newTodo(){
    var newTodo = prompt("enter new Todo")
    //add new todo
    todos.push(newTodo);
    console.log("added new todo");

}

function deleteTodo(){
    var index = prompt("enter index of todo to delete");

    todos.splice(index, 1);
    console.log("Item was removed from list")
}


}, 500);

