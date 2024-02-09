const form = document.querySelector('form');
const taskList = document.querySelector('.task-list');


const tasks = [];
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const input = document.querySelector('.task-input');
    tasks.push(input.value);
    taskList.innerHTML = tasks.map(task =>
         `<li>
     <input type="checkbox">
     <span> ${task}</span>
          </li>`
    ).join('----------------------');
    input.value = '';

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for ( let i=0; i < checkboxes.length; i++) 
    checkboxes[i].addEventListener('click', (e) => {
e.target.nextElementSibling.classList.toggle('delete');

});
})  







