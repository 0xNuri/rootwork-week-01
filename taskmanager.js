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

let done = 0
let pending = 0

for (let i = 0; i < tasks.length; i ++) {
    if (tasks[i].completed === true) {
        done ++
    }
     else {
      pending ++
    } 

    console.log(tasks[i])
    console.log (`total number of tasks are ${tasks.length}`)
}
   console.log(`pending tasks are ${pending} `)
    console.log(`completed tasks are ${done}`)
