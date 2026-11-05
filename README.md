# Developer Profile Website

## What I built
I built a developer profile page listing my skills and attributes as a developer, written to be honest and fully explained.

## Main sections of the website
- About
- Skills
- Projects
- Education
- Experience
- Contact

## 3 semantic HTML choices I made and why
1. `<header>`: used at the top of the page to hold the main heading and a short summary, so the page opens with a clear introduction.
2. `<section>`: used to separate the different parts of the page, each with its own `id`, so the navigation links can jump straight to them.
3. `<main>`: used to wrap the central content of the page, apart from the navigation and footer, so it's clear which part is the page's actual content.

## One thing I found confusing or interesting
The difference between `src` and `href`. Both can point to an image in the project folder, but `src` loads the image into the page, while `href` only links to it.

## AI disclosure
I used AI (Claude) throughout this project to understand HTML concepts, to review my code, and to find mistakes. It explained what tags like `<main>`, `<header>`, `<footer>` and `<div>` are for, and how a `<label>` connects to an input through `for` and `id`. It reviewed my HTML several times and pointed out problems such as a leftover stylesheet link, a `<nav>` placed inside `<head>`, unclosed sections, form fields without labels, and the wrong input type for email.

Some of the text on the page was drafted with AI from what I told it about my work: the short bio, the skills list and the project descriptions. I also adapted an example it gave me for the contact form. I wrote the page structure and the form, and made the corrections after each review, myself.

One suggestion I accepted was giving every form field its own label and changing the email field to `type="email"`.