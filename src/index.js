document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', buildToDo);
});

function buildToDo (e) {
  e.preventDefault();
  let todo = e.target.description.value;
  //console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = 'X';
  p.appendChild(btn);
  //btn.addEventListener('click', handleDelete);
  p.textContent = todo;
  document.querySelector('#list').appendChild(p);
}

//function handleDelete () {
  // delete 'p' code here
//}


//listen for a 'submit' button on <form>
//invoke .preventDefault() on 'submit' event

//type task into input
//create new DOM element containing task string upon submit event