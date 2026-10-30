let tasks = [
    {
    title: "Fix review feedback on the arrays task",
    category: "Rootwork",
    completed: true,
    priority: "high"
    },
{
    title: "Write the README for the task manager",
    category: "Rootwork",
    completed: false,
    priority: "high"
},
{
    title: "Buy a data bundle",
    category: "Everyday",
    completed: true,
    priority: "medium"
},
{
      title: "Pay the electricity bill",
    category: "Everyday",
    completed: false,
    priority: "high"
},
{
      title: "Call a friend",
    category: "Personal",
    completed: false,
    priority: "low"
},
{
     title: "Organise my desk",
    category: "Personal",
    completed: true,
    priority: "medium"
}

]

function showStats(tasks) {

 let done = 0
    let pending = 0

    for (let i = 0; i < tasks.length; i ++) {
    if (tasks[i].completed === true){
      done ++  }
    else {
        pending ++ }

   console.log (`task number ${i+1} is ${ tasks[i].completed ? "done" :"pending" }`)
     }
     console.log(`pending tasks are ${pending} `)
    console.log(`completed tasks are ${done}`)
    }


  function displayTasks(tasks){
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i].title} | ${tasks[i].category} | ${tasks[i].completed ? "done" : "pending"}`);
  }
  console.log (`total number of tasks are ${tasks.length}`)
}
     


function findTasks(tasks){
 let priorityTask = 0
    for (let i = 0; i < tasks.length; i ++) {
     if (tasks[i].priority === "high" && tasks[i].completed === false){
         console.log(`priority task number ${[i]} is pending`)
     }

    
    if (tasks[i].priority === "low") {
        priorityTask ++ }

    }
    console.log(`total number of non-priority tasks are ${priorityTask}`)
}

function addTasks(tasks){
    tasks.push ({ 
    title: "New meeting",
    category: "Rootwork",
    completed: false,
    priority: "high"

    })
    console.log (tasks)
}


displayTasks(tasks);  
showStats(tasks);
findTasks(tasks);
addTasks(tasks)