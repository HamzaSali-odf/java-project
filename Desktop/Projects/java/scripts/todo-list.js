const toDolist = [];

function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
//    console.log(name);
toDolist.push(name);
console.log(toDolist);

inputElement.value ='';
}