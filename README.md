# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

|Inactive page (Dark mode)|
|------------------------|
|![Active page](./screenshots/inactive%20page.png)|

|All page (Light mode)|
|--------------------|
|![All page](./screenshots/all%20page.png)|

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I buil the mobile page first, before moving to bigger screen sizes, and finally, adding the js.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
/* Learnt to create a toggle button using a checkbox input */
.toggle-button {
  background-color: var(--toggle-clr);
  width: 36px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
}

.toggle-button:focus {
  outline: 2px solid var(--active-toggle);
  outline-offset: 0.18rem;
}

.toggle-button::before {
  position: absolute;
  content: '';
  background-color: var(--primary);
  width: 16px;
  height: 18px;
  border-radius: 50%;
  top: 1px;
  left: 1px;
  transition: 0.3s;
}

input:checked + .toggle-button {
  background: var(--active-toggle);
}

input:checked + .toggle-button::before {
  transform: translateX(18px);
}

input {
  display: none;
}
```

```js
// Learn to use global event listeners for html elements added dynamically
function addGlobalEventListener(type, selector, callback){
  document.addEventListener(type, e => {
    if(e.target.matches(selector)){
      callback(e)
    }
  })
}
```

### Continued development

Learn to use grid better and become more skilled in css.

### Useful resources

- [Event delegation by Web Dev Simplified](https://youtu.be/cOoP8-NPLSo?si=vMne7eEcMfClY4vd) - Helped me understand why html added dynamically does not respond to the regular event listener format

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
