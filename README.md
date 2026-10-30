# Task Management Program

## What the Program Does

My program is a simple task management application that uses an array stored in a constant as its main dataset. The array contains seven sample tasks generated with the assistance of AI.

The program performs different operations on the task array using five functions:

1. **showStats:** Counts and displays the number of pending and completed tasks.
2. **displayTasks:** Displays the total number of tasks and lists each task in the order of its title, category, priority and completion status.
3. **addTask:** Allows a new task to be added to the existing array using the `push()` method.
4. **categorizeTask:** Counts the number of tasks in each category: Work, Personal and Everyday.
5. **isPriority:** Checks the high-priority tasks and identifies whether they are pending or completed. It displays the relevant result based on their completion status.

Together, these functions allow the program to organise, display and analyse the tasks in the array.

## How I Broke the Problem Down

I started by writing the main code for the task management program. Once I had the basic code working, I began breaking it down into smaller sections and converting those sections into separate functions.

I identified five main operations that the program needed to perform: displaying statistics, displaying the tasks, adding new tasks, categorising tasks and checking high-priority tasks.

I then created a separate function for each operation. This made it easier to organise the code and allowed each function to handle a specific responsibility.

After creating the functions, I called them to execute the different operations on the original task array.

## Concepts I Used

The main JavaScript concepts I used throughout this project were:

- **Arrays:** I used an array to store the seven sample tasks that the program works with.
- **Constants (`const`):** I declared the task array using `const`.
- **Functions:** I created five functions to separate the different operations performed by the program.
- **For loops:** I used `for` loops to go through the array and examine individual tasks.
- **If and else statements:** I used conditional statements to check task categories, completion statuses and priority levels.
- **Counters:** I used counter variables to keep track of the number of pending tasks, completed tasks and tasks belonging to different categories.
- **Array push():** I used the `push()` method to add new tasks to the existing array.

These concepts formed the foundation of the program and allowed me to perform the required operations without using more advanced JavaScript features.

## Hardest Part

The hardest part of this project was breaking down my original code and converting it into separate functions.

Initially, I struggled to understand how to identify the different sections of a written code block and determine how to turn them into individual functions. I was also not used to working with such a long block of code. Having to scroll up and down repeatedly to locate different sections made the process more challenging.

I encountered several errors while reorganising the code. Some of these errors were related to variable scope, particularly when I moved variables and `console.log()` statements into or out of functions.

For example, I encountered a `ReferenceError: pending is not defined` because the variables were declared inside a function but were being accessed outside its scope. Understanding where variables could be accessed and moving the relevant statements into the correct function helped me resolve the issue.

This experience helped me understand functions, code organisation and variable scope better.

## One Thing I Would Improve

At this stage, I find it difficult to identify a specific improvement because I genuinely put my best effort into completing the project with the JavaScript knowledge I currently have.

However, with more time and a better understanding of JavaScript, I would like to improve the overall structure of my code, explore more efficient ways of performing the different operations and learn additional JavaScript concepts that could make the program more flexible and maintainable.

## AI Disclosure

I used AI at different stages of this project, mainly to help me understand functions, objects and variable scope, break down the project instructions into smaller steps, and debug errors when my code was not working as expected.

The seven sample tasks in my dataset were also generated with the assistance of AI.

One suggestion I accepted was using the examples and patterns provided by AI to understand how functions, loops and counters could work together. I used these explanations as a guide when writing my own code.

However, I did not simply rely on AI to write the entire program. I wrote the loops, counters and functions myself, adapting the patterns I had been shown. I also ran the program to test the output and verify that the different counts were correct.

One instance where I had to work through a problem myself involved a variable scope error. Rather than simply following the suggested solution, I considered how I could reorganise the code and decided to create a separate function to handle the operation. I then tested my changes to make sure the error was resolved.

Overall, AI served as a learning and debugging tool throughout the project, but I was responsible for writing, adapting, testing and correcting the program.