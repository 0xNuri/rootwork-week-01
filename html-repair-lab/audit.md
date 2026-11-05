## 1. Missing DOCTYPE declaration
**Problem:** The original HTML document did not have a DOCTYPE declaration.
**Fix:** Added `<!DOCTYPE html>` at the top of the document.
**Why:** This tells the browser that the document uses HTML5 and helps it interpret the page correctly.

## 2. Incorrect placement of the header
**Problem:** The header was incorrectly placed inside the head container.
**Fix:** Moved the header from the head container to the body container.
**Why:** The head container is meant for metadata and document information, while the body contains the visible content of the webpage.

## 3. Incorrect navigation container
**Problem:** A div container was used for the navigation links.
**Fix:** Changed the div container to a nav container.
**Why:** The nav element identifies the links as the main navigation of the webpage and gives them a clearer meaning than an empty container.

## 4. Incorrect heading level for About Us
**Problem:** The About Us heading had an incorrect heading level.
**Fix:** Changed the h3 of About Us to the h2 heading.
**Why:** About Us is a main section of the webpage under the primary Tech Club heading, so h2 is more appropriate.

## 5. Incorrect container for Events
**Problem:** The Events content was placed inside a div container.
**Fix:** Changed the div container of Events to a section container.
**Why:** The section element groups related content together and makes the Events area easier to understand.

## 6. Incorrect heading hierarchy of list items
**Problem:** The heading hierarchy of the event list items was not properly organised.
**Fix:** Fixed the heading hierarchy of list items by using h3 for the individual event titles.
**Why:** The event titles are subdivisions of the Upcoming Events section, so h3 creates a logical heading structure.

## 7. Incorrect input type for email
**Problem:** The email input originally used type="text".
**Fix:** Changed type="text" into type="email".
**Why:** The email input type allows the browser to check whether the entered information follows a recognised email format.

## 8. Incorrect footer container
**Problem:** The last div container was used for the footer content. 
**Fix:** Changed the last div container to a footer container.
**Why:** The footer element gives the closing information of the webpage a meaningful semantic structure.

## 9. Missing legend and text area for longer responses
**Problem:** The form did not have an appropriate structure for identifying the reason for joining or collecting a longer written response.
**Fix:** Added a legend and text area to allow for longer text to be submitted.

**Why:** The legend desribes the group of form controls, while the textarea allows users to write longer, multiple-line responses.

## 10. Missing character encoding
**Problem:** The original document did not specify its character encoding.
**Fix:** Added character encoding using `<meta charset="UTF-8">`.
**Why:** UTF-8 supports a wide range of characters and helps the browser display text correctly.

## 11. Missing paragraph containers in the form
**Problem:** The form elements were not properly grouped into paragraphs.
**Fix:** Added paragraph containers to the form.
**Why:** Paragraph elements help organise related form content and make the structure clearer.

## 12. Missing input names and IDs
**Problem:** The form inputs did not have the necessary name and id attributes.
**Fix:** Added input name and id to ensure seamless data connection.
**Why:** The id connects each label to its corresponding input, while the name identifies the field when the form data is submitted.

## 13. Missing header and main containers
**Problem:** The original webpage did not have clearly defined header and main containers.
**Fix:** Added header and main conainers.
**Why:** The header identifies the introductory part of the webpage, while main identifies the primary content. This makes the document structure more meaningful.


## AI Assistance Disclosure

I used AI to review my HTML corrections, explain some HTML concepts, and help organise my audit findings. I reviewed the suggestions and made the changes based on my understanding of HTML structure and semantic elements.