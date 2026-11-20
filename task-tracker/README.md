# Interactive Task Tracker

## 1. How to Open and Run the App
- Open `task-tracker/index.html` directly in any web browser (double-click the file), or run it using VS Code's **Live Server** extension at `http://127.0.0.1:5500`.

## 2. How Task State is Stored and Rendered
- **State:** Tasks are stored in memory in a JavaScript array: `let tasks = [{ id, name, complete }]`. The active view is tracked with `let currentFilter = 'all'`.
- **Rendering:** A single `render()` function clears the task container and redraws only the tasks that match `currentFilter`. If no tasks match, it displays "No tasks to display". The incomplete count is updated after every render.

## 3. How Event Listeners Work
- **Form Submit:** Listens to the form's `submit` event, uses `e.preventDefault()` to stop page refresh, validates input, pushes the new task to `tasks`, and calls `render()`.
- **Event Delegation (Tasks):** A single `click` listener on `tasksContainer` checks `e.target`. If a checkbox is clicked, it flips `task.complete`. If the `X` button is clicked, it filters out that task by ID. Both trigger `render()`.
- **Filters:** Click listeners on the filter buttons update `currentFilter` and re-render the view.
- **Bulk Actions:** Click listeners on "Clear completed tasks" and "Delete all" update the array and re-render.

## 4. How Blank Input is Prevented
- The input value is sanitized using `taskInput.value.trim()`.
- If the trimmed string is empty (`""` or `null`), the function displays `"Please enter a valid task name!"` in the error paragraph and halts execution with `return`.
- If valid, the error message is cleared and the task is added.

## 5. One Bug Debugged
- **The Bug:** On mobile view (375px), the header, filter list, and task cards all collapsed directly on top of each other.
- **Cause:** Elements had `grid-area` assigned, but mobile `body` only had `grid-template-columns: 1fr` without defining `grid-template-areas`. The browser placed all sections into Row 1, Column 1.
- **Fix:** Added `grid-template-areas: "header" "lists" "active";` to the mobile `body` rule in `styles.css` so sections stack vertically.

## 6. Manual Test Outcomes
- **Add Task (Mouse & Keyboard Enter):** Passed. Tasks add smoothly without page reload.
- **Blank / Whitespace Input:** Passed. Rejects empty input and shows error message.
- **Toggle Completion:** Passed. Checkbox toggles strikethrough and decrements remaining count.
- **Delete Single Task:** Passed. Clicking `X` removes only that task.
- **Filters (All / Active / Completed):** Passed. Correct tasks show for each filter.
- **Empty State:** Passed. "No tasks to display" shows when a filter has no items.
- **Mobile Viewport (375px):** Passed. Stacks vertically with zero horizontal scroll.

## 7. AI Usage Disclosure
- AI (Google Antigravity) was used as a learning coach to explain DOM concepts, clarify CSS Grid named areas, and assist in debugging console/syntax errors. All code was reviewed, implemented, and tested by the student.