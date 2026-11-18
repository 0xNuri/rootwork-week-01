const taskForm = document.querySelector('.new-task-creator form');
const taskInput = document.querySelector('.new-task');
const taskList = document.querySelector('.task-list')
const tasksContainer = document.querySelector('.tasks-container');
const errorMessage = document.querySelector('.error')
const taskDisplayContainer = document.querySelector('[data-list-display-container]')
const taskTitleElement = document.querySelector('[data-list-title]')
const taskCountElement = document.querySelector('[data-list-count]')
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = [
    { id: '1', name: 'Revise rootwork assignment', complete: false },
    { id: '2', name: 'Get lunch', complete: true }
];

let currentFilter = 'all';


taskForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Form was submitted!");
    const taskName = taskInput.value.trim();
     console.log("Task name is:", taskName);
    if (taskName === null || taskName === '') {
        errorMessage.textContent = 'Please enter a valid task name!';
        return;
    }
        errorMessage.textContent = '';
    const task = createTask(taskName);
    taskInput.value = '';
    tasks.push(task);
    render()
})
 function createTask(name){
   return {id: Date.now().toString(), name: name, complete:false}
}

 function renderTaskCount(selectedTask){
     const incompleteTaskcount = tasks.filter(task => !task.complete).length;
     const taskString = incompleteTaskcount === 1 ? "task" : "tasks"; 
    taskCountElement.innerText = `${incompleteTaskcount} ${taskString} remaining`}


    function render() {
    clearElement(tasksContainer);

    let filteredTasks = tasks;
    if (currentFilter === 'active'){
        filteredTasks = tasks.filter (task => !task.complete);
    }
    else if (currentFilter === 'completed') {filteredTasks = tasks.filter(task => task.complete)
}

     if (filteredTasks.length === 0){
        const emptyMessage = document.createElement ('p');
        emptyMessage.classList.add('empty-state');
        emptyMessage.textContent = 'no tasks to display';
        tasksContainer.appendChild(emptyMessage);
     }
     else { filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add("task");

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task.id;
        checkbox.checked = task.complete;
         
        const label = document.createElement('label');
        label.htmlFor = task.id;

        const customCheckbox = document.createElement('span');
        customCheckbox.classList.add('custom-checkbox');

        label.appendChild(customCheckbox);
        label.append(task.name);

        const deletebutton = document.createElement('button');
        deletebutton.classList.add('btn-delete-one');
        deletebutton.textContent = 'X';
        deletebutton.setAttribute('aria-label', `Delete ${task.name}`);

        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deletebutton);

        tasksContainer.appendChild(taskElement);
    })
};


    renderTaskCount();
}

function clearElement(element){
while (element.firstChild){
    element.removeChild(element.firstChild);
}
}


tasksContainer.addEventListener('click', e => {
    if (e.target.type === 'checkbox') {
        const selectedTaskId = e.target.id;
        
        const selectedTask = tasks.find(task => task.id === selectedTaskId);
        if (selectedTask) {
            selectedTask.complete = e.target.checked; // update true/false
            render();
        }
    }

    if (e.target.classList.contains('btn-delete-one')) {
        const taskElement = e.target.closest('.task');
        const checkbox = taskElement.querySelector('input[type="checkbox"]');
        const selectedTaskId = checkbox.id;

        tasks = tasks.filter(task => task.id !== selectedTaskId);
        render();
    }
});
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active-filter'));

        button.classList.add('active-filter');

        currentFilter = button.dataset.filter;

        render();
    });
});
render ()