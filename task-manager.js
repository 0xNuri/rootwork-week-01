const tasks = [
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

     }
     console.log(`pending tasks are ${pending} `)
    console.log(`completed tasks are ${done}`)
    }


  function displayTasks(tasks){
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i].title} | ${tasks[i].category} | ${tasks[i].priority} | ${tasks[i].completed ? "done" : "pending"}`);
  }
  console.log (`total number of tasks are ${tasks.length}`)
}
     



function addTasks(tasks, title, category, completed, priority){
    tasks.push ({ 
    title: title,
    category: category,
    completed: completed,
    priority: priority,

    })
    console.log (tasks)
}

function categoriseTask(tasks){
let root = 0
 let pers = 0
 let every = 0
  
 for (let i = 0; i < tasks.length; i ++) {
    
    if (tasks[i].category === "Rootwork") {
        root ++ }
    else if (tasks[i].category === "Personal") {
        pers ++ }
    else  if (tasks[i].category === "Everyday") {
        every ++ }

    }
    console.log(`total number of Rootwork tasks are ${root}`)
    console.log(`total number of Personal tasks are ${pers}`)
    console.log(`total number of Everyday tasks are ${every}`)
}

function isPriority(tasks){
    let foundPriority = 0
    for (let i = 0; i < tasks.length; i ++) {
        
     if (tasks[i].priority === "high" && tasks[i].completed === false){
         console.log(`${tasks[i].title} task is pending`)
        foundPriority ++
     }
    }

     if (foundPriority === 0){
        console.log("no high priority task is pending")
     }

}

displayTasks(tasks);  
showStats(tasks);
addTasks(tasks, "Buy bread", "Everyday", false, "low");
categoriseTask(tasks);
isPriority(tasks)