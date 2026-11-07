# HTML Repair Lab: Audit

## 1. Missing DOCTYPE declaration
**Problem:** The original HTML document did not have a DOCTYPE declaration.
**Fix:** Added `<!DOCTYPE html>` at the top of the document.
**Why:** This tells the browser that the document uses HTML5 and helps it interpret the page correctly.

## 2. Heading placed inside the head
**Problem:** The `<h1>` Tech Club heading was placed inside `<head>`.
**Fix:** Moved it out of the head and into a `<header>` in the body.
**Why:** The head is meant for metadata and document information, while the body contains the visible content of the webpage. A heading in the head is invalid and is not displayed as page content.

## 3. Incorrect navigation container
**Problem:** A `div` was used for the navigation links.
**Fix:** Changed the `div` to a `nav` element.
**Why:** The `nav` element identifies the links as the main navigation of the webpage and gives them a clearer meaning than a generic container.

## 4. Incorrect heading level for About Us
**Problem:** The About Us heading was an `h3`, which skipped the `h2` level.
**Fix:** Changed the `h3` to an `h2`.
**Why:** About Us is a main section of the page under the primary Tech Club heading, so `h2` is the correct level. Skipping levels makes the structure confusing for people using screen readers.

## 5. Incorrect container for Events
**Problem:** The Events content was placed inside a generic `div`.
**Fix:** Changed the `div` to a `section`.
**Why:** The `section` element groups related content together and makes the Events area easier to understand and to link to.

## 6. Articles placed directly inside the list
**Problem:** The `<article>` elements were placed directly inside the `<ul>`, with the `<li>` inside each article.
**Fix:** Moved each `<article>` inside its `<li>`.
**Why:** A `ul` may only contain `li` elements as its direct children. Each event is a self-contained piece, so it sits as an `article` inside its list item.

## 7. More than one h1 and inconsistent heading levels
**Problem:** "Upcoming Events" was a second `<h1>`, and the event titles used `h4` and `h2` inconsistently.
**Fix:** Kept one `h1` for Tech Club, made the section headings `h2`, and made both event titles `h3`.
**Why:** A page should have one main heading, and the levels should follow the structure of the content, not how large the text looks.

## 8. Incorrect input type for email
**Problem:** The email input originally used `type="text"`.
**Fix:** Changed it to `type="email"`.
**Why:** The email type lets the browser check that the entry looks like an email address, and it gives mobile users a suitable keyboard.

## 9. Incorrect footer container
**Problem:** A generic `div` was used for the closing information.
**Fix:** Changed it to a `footer` element.
**Why:** The `footer` element gives the closing information of the page a meaningful semantic role.

## 10. Form controls had no labels
**Problem:** The form had plain text such as "Name:" next to each input, with no `label` elements.
**Fix:** Added a `<label>` for each control, with a `for` that matches the control's `id`.
**Why:** A label tells screen readers what each box is for, and clicking it focuses the input. Plain text next to a box isn't connected to it.

## 11. Missing input names and IDs
**Problem:** The form inputs did not have `name` or `id` attributes.
**Fix:** Added a `name` and an `id` to each input.
**Why:** The `id` connects each label to its input, while the `name` identifies the field when the form data is submitted.

## 12. Short text box used for a longer response
**Problem:** "Why do you want to join?" used a single-line text input.
**Fix:** Replaced it with a `<textarea>` and wrapped it in a `fieldset` with a `legend`.
**Why:** A `textarea` allows a longer, multi-line answer, and the `legend` describes the group of controls.

## 13. Alt text that said nothing
**Problem:** The image had `alt="image"`.
**Fix:** Replaced it with text that describes what the picture shows.
**Why:** Alt text is read aloud to people who can't see the image, so it should communicate meaning. The word "image" tells them nothing.

## 14. Missing character encoding and language
**Problem:** The document did not specify its character encoding or its language.
**Fix:** Added `<meta charset="UTF-8">` and `lang="en"` on the `html` element.
**Why:** UTF-8 helps the browser display text correctly, and the language helps screen readers pronounce the content properly.

## 15. Missing header and main containers
**Problem:** The page did not have clearly defined header and main areas.
**Fix:** Added a `<header>` and a `<main>`.
**Why:** The header marks the introduction of the page, while `main` marks the primary content. This makes the structure meaningful to browsers and assistive technology.

## AI Assistance Disclosure
I used AI to review my HTML corrections, explain HTML concepts, and help organise this audit. It pointed out problems I had missed (the `article` elements inside the `ul`, the second `h1`, the missing labels and the weak alt text), and it helped me correct spelling and tidy the wording of the audit. I checked each point against the original broken code and the repaired `index.html` before keeping it. 