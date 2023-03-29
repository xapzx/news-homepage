# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot/screenshot.png)

### Links

- Solution URL: [https://github.com/xapzx/news-homepage]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this project, I learnt about the uses of the 'picture' tag. Specifically, using the 'source' tag inside of it to change the image depending on the screen width.

To see how you can add code snippets, see below:

```html
<picture>
  <source srcset="assets/images/image-web-3-desktop.jpg" media="(min-width: 1000px)"/>
  <img src="assets/images/image-web-3-mobile.jpg" alt="Image for Web 3.0" class="main-img">
</picture>
```