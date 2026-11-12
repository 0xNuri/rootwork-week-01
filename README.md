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

# Responsive Developer Profile

## Week 6 Learning Check

**When would you choose Flexbox instead of Grid?**
I chose Flexbox to arranging items in one direction, ie. on a single line

I used CSS Grid for my project cards because I wanted to arrange them in columns and rows.

**What does `box-sizing: border-box` change?**
box-sizing: border-box makes the browser include an element's padding and border within its specified width and height instead of overflowing.

**What is the difference between margin and padding?**
Margin is the space outside an item's border, while padding is the space between the content and the border of the item.

**What does a media query do?**
A media query allows to select CSS styles depending on the screen size or device characteristics.

**Why is `max-width: 100%` useful for images?**
It makes images responsive because they can shrink to fit smaller screens while maintaining their original proportions through height: auto.

**One CSS behaviour that confused me, and how I understand it now**
I initially wondered why some navigation links kept a different colour even after I reloaded the page.

I now understand that :visited applies styles to links that the browser recognises as previously visited, no matter if reloaded or not

## Design decisions
1. chose lighter pastel colours for project card
2. used gold accent and gold throughout
3. black background

## Flexbox vs Grid
nav bar for flexbox= allows for straight line setup and wrapping
grid for project card = responsive grid and column set up 
## Responsive behaviour
On desktop:
- The navigation links can appear horizontally.
- The project cards are arranged in columns using CSS Grid.
- The headings use larger font sizes.
- The sections have more spacing.

On mobile (600px or below):
- The body margin is reduced.
- The main content padding is reduced.
- The heading font sizes become smaller.
- The project card padding is reduced.
- The navigation links change to a vertical layout.
- Images shrink to fit their containers.
## Hardest CSS problem
Initially, I expected an element with width: 100% to fit perfectly inside its parent container. However, when padding and borders were added, the element could become wider than expected.

I understood that this happened because the default box-sizing behaviour is content-box, which adds padding and borders to the specified width.

## AI disclosure
I used AI to explain nebulous concepts such as variables, the box model, Flexbox, Grid, media queries and focus states, to review my stylesheet, and to help find bugs such as an invalid `var()` value, and a stray character that stopped my section spacing from working. 
I acknloweged media query to my own breakpoint and values, and I chose not to keep some suggested clean-ups. 