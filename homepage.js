import extensions from "./data.json" with {type: "json"}
import { handleTheme } from "./theme-handler.js"

const listButtons = document.querySelectorAll('.list-button')
const allButton = document.querySelector('#all-button')
const activeButton = document.querySelector('#active-button')
const inactiveButton = document.querySelector('#inactive-button')
const extensionGrid = document.querySelector('.extensions-grid')

unselectAll()

function insertHTML(){
  let inputID = 0;
  
  for(const extension of extensions){
    extensionGrid.insertAdjacentHTML("beforeend", `
      <div class='extension-wrapper'>
        <div class='info-row'>
            <img class="ext-icon" src="${extension.logo}">
            
            <div class='info-txt'>
              <h2>${extension.name}</h2>
              <p>
                ${extension.description}
              </p>
            </div>
        </div>

        <div class="actions-row">
          <button class="remove-button">Remove</button>
          <input type="checkbox"  id="check-${inputID}">
          <label tabindex="${inputID}" for="check-${inputID}" class="toggle-button"></label>
        </div>
      </div> `)
     inputID = inputID + 1
     changeList()
  }
}

function extensionType(){
  for(const button of listButtons){
    button.addEventListener('click', () => {
    unselectAll()  
    button.classList.contains('active-list-button')
    ? console.log('already active')
    :  button.classList.add('active-list-button')  
    })
  }
}

function unselectAll(){
  for(const button of listButtons){
    button.classList.remove('active-list-button')
  }
}

function changeList(){
  allButton.addEventListener('click', () => {
    for(const wrapper of document.querySelectorAll('.extension-wrapper')){
      wrapper.style.display = 'flex'
    }
  })

  activeButton.addEventListener('click', () => {
    for(const wrapper of document.querySelectorAll('.extension-wrapper')){
      if(!wrapper.classList.contains('active')){
        wrapper.style.display = 'none';
      }else{
        wrapper.style.display = 'flex';
      }
    }
  })

  inactiveButton.addEventListener('click', () => {
    for(const wrapper of document.querySelectorAll('.extension-wrapper')){
      if(wrapper.classList.contains('active')){
        wrapper.style.display = 'none'
      }else{
        wrapper.style.display = 'flex'
      }
    }
  })
}

function addGlobalEventListener(type, selector, callback){
  document.addEventListener(type, e => {
    if(e.target.matches(selector)){
      callback(e)
    }
  })
}

addGlobalEventListener('click', '.toggle-button', e => {
  if(e.target.classList.contains('active')){
    e.target.classList.remove('active')
    e.target.parentElement.parentElement.classList.remove('active')
    // e.target.parentElement.parentElement.parentElement.classList.remove('active')
    return
  }

  e.target.classList.add('active')
  e.target.parentElement.parentElement.classList.add('active')
  // e.target.parentElement.parentElement.parentElement.classList.add('active')
})

addGlobalEventListener('click', '.remove-button', e => {
  e.target.parentElement.parentElement.remove()
})

insertHTML()

extensionType()

handleTheme()
