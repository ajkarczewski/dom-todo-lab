const inputElement = document.getElementById('input')

const button = document.getElementById('submit-button')

const ulElement = document.getElementById('todo-list')

const resetButton = document.getElementById('reset-list')

// ask for clarity on cached element reference document query selector

button.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  // get the text from the input field
  const inp = document.querySelector('input')
  // and assign it to textContent of newLi
newLi.textContent = inp.value
if (inp.value !== "") {
  // attatch the newLi to the <ul>
  document.querySelector('ul').appendChild(newLi)
  inp.value = ""
}
})

resetButton.addEventListener('click', function (evt){
  let element = document.getElementById('todo-list');
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
})

// ulElement.addEventListener('click', function (evt){
//   let element = document.getElementById('todo-list');
//   while (element.firstChild) {
//     element.removeChild();
//   }
//   })


// ulElement.addEventListener('click', handleClick)
// function handleClick(evt) {
// evt.node.parentNode.removeChild(node)
// }

// ulElement.addEventListener('click', handleClick)
// function handleClick(evt) {
// document.getElementById('todo-list').innerHTML = ""


