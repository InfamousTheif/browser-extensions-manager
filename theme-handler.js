export const themeToggle = document.querySelector('.theme-toggle')
const darkImg = document.querySelector('.dark-img');
const lightImg = document.querySelector('.light-img');

export function handleTheme(){
  let darkmode = localStorage.getItem('darkmode')
  themeToggle.addEventListener('click', () => {
    document.body.classList.contains('light-mode')
    ? enableDarkmode()
    : enableLightmode();
  })

  if(darkmode === "active"){
    enableDarkmode();
  }else {
    enableLightmode()
  }
}

function enableDarkmode(){
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkmode','active')
  themeToggle.setAttribute('aria-label', 'Switch to light mode');
  darkImg.classList.remove('hide')
  lightImg.classList.remove('show')
  darkImg.classList.add('show')
  lightImg.classList.add('hide')
}

function enableLightmode(){
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  localStorage.setItem('darkmode', null)
  themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  darkImg.classList.remove('show')
  lightImg.classList.remove('hide')
  darkImg.classList.add('hide')
  lightImg.classList.add('show')
}