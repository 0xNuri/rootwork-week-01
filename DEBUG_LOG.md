# Debug Log

## Bug 1: Priority Counter Printed on Every Round

### Problem
The counter for high-priority tasks printed several times instead of once.

### What I Observed
The result printed once per task, so I got the same line repeated six times, with the numbers increasing (0, 1, 2, 3, 4, and so on) instead of one final answer.

### What I Checked
I checked where the loop started and ended, and where my `console.log` statement was positioned in relation to the loop's curly braces.

### Cause
The `console.log` statement was inside the `for` loop's code block, so it executed on every iteration. The result should only be printed after the loop has finished counting.

### Fix
I moved the `console.log` statement outside the loop, after its closing `}`, so it executes only once and displays the final count. I then tested the output to confirm that the counter worked correctly.



## Bug 2: `ReferenceError: pending is not defined`

### Problem
After I moved my counting code into the `showStats` function, the program crashed.

### What I Observed
Node.js threw the error `ReferenceError: pending is not defined`, pointing to line 60 of my file.

### What I Checked
I compared where the `done` and `pending` variables were declared with where they were being printed.

### Cause
The `done` and `pending` variables were declared inside the `showStats` function, meaning they were only accessible within that function's scope. However, the two `console.log` statements that attempted to print their values were placed outside the function, where those variables were not accessible.

### Fix
I moved both `console.log` statements inside the `showStats` function, placing them after the loop and before the function's closing `}`. This ensured that the variables were accessed within the scope where they were declared.