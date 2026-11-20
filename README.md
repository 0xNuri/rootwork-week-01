## Interactive Developer Profile

Extends my Week 5 semantic HTML and Week 6 responsive CSS profile with JavaScript.

## What I added

- **Mobile navigation toggle:** a menu button that opens and closes the nav on small screens, with `aria-expanded`, `aria-controls` and an accessible label. It also closes with the Escape key.
- **Contact form behaviour:** validation on name, email and message, with `trim()`, a specific error beside each invalid field, and screen-reader announcements.
- **Demo success message:** says plainly that no email was sent.
- **Enhancement:** dark and light mode toggle

## Week 7 Learning Check

1. **DOM vs the HTML source:** HTML is the original code, while the DOM is how the browser organizes it for JavaScript to work with.
2. **Event listener vs an inline handler:** An event listener is added in JavaScript, while an inline handler is written directly in HTML.
3. **Why `preventDefault()` on the demo form:** It stops the page from reloading so JavaScript can handle the form.
4. **How validation messages are shown:** They appear to tell users what they need to correct in the form.
5. **What `aria-expanded` tells a user:** It tells screen readers whether a menu or section is open or closed.
6. **What went wrong while debugging:**

   **The form reloaded the page even though I used `preventDefault()`**

   - **What I saw:** I submitted the form and the page reloaded.
   - **What I checked:** I opened the browser Console (F12) and read the first error message.
   - **Cause:** Line 4 of my script used `querySelector('(data-new-list-form)')`, which is not a valid selector. That threw an error, and the script stopped running at that line. The submit listener further down the file was never attached, so `preventDefault()` never ran.
   - **Fix:** I deleted the invalid selectors that I wasn't using, so the script ran all the way down and attached the listener.

## Implementation decisions

1.  used aria-expanded for the nav button menu, to allow html to know whether it was open or not
2.  added a gradient in light and dark mode for added aesthetics and improved visibility
3.  used only event listeners in js rather than inline to separate functions

## Testing

Checked at 375px, 768px and 1440px:

- **375px:** worked well, except I did not know how to fix the nav menu toggle button and it covers a large part of the screen
- **768px:** no issues
- **1440px:** no issues

## Limitations

The contact form is a demo. It doesn't send an email, and nothing typed into it is stored or logged.

## AI disclosure

I used AI (Claude) and antigravity to explain DOM and accessibility concepts, to review my code, and to help find the causes of bugs. It also summarised the work I had done, and I used that summary as notes. I wrote my own code and README answers.