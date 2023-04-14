function addTask(){
    const titleTask = document.querySelector('#title-task').value;

    if(titleTask){
        const template = document.querySelector('.template');

        const newtemplate = template.cloneNode(true)

        newtemplate.querySelector('.title').textContent = titleTask;

        newtemplate.classList.remove('template');
        newtemplate.classList.remove('hide');

        const task = document.querySelector('#list-task');

        task.appendChild(newtemplate);

        const btnremove = newtemplate.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        })

        document.querySelector('#title-task').value ="";
    }
}

function removeTask(task){
    task.parentNode.remove(true)
}

const addbtn = document.querySelector("#btn");

addbtn.addEventListener('click', function(e){
    e.preventDefault();

    addTask();
});