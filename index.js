const form = document.getElementById('main-form');
form.addEventListener('submit', function (e) { 

    e.preventDefault()

const formField = document.getElementById('toDoList')
console.log(formField.value)



const showList = document.createElement('div')
showList.innerHTML = ` 
<p>${formField.value} </p> 
`

const section = document.getElementById ('list')
section.appendChild(showList)
formField.value = ''


})