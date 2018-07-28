const innerBox = document.getElementById('inner-box');
const form = document.getElementById('inputArea');
const textBox = document.getElementById('textBox');
const postButton = document.getElementById('button');
const ul = document.getElementById('posted');
let arr = ['terror', 'murder', 'kill', 'fuck', 'cunt', 'shit', 'twat', 'asshole', 'dick', 'isis', 'ass '];

//Get input, send over to 'createLI', append returned value to ul.

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = textBox.value;
  textBox.value = '';
  for(let word of arr) {
    if(text.toLowerCase().includes(word)) {
      return alert('Post blocked'); 
    }
  } 
  //if(text !== '') {
  if(text) {
    const li = createLI(text);
    ul.prepend(li);
  } 
});


//Create li append elements to it.


function createLI(text) {
  function createElement(elementName, prop, value, classValue = undefined) {
    const element = document.createElement(elementName);
    element[prop] = value;
    element.className = classValue;
    return element;
  }

  function appendEl(elementName, prop, value, classValue) {
    const element = createElement(elementName, prop, value, classValue);
    li.append(element);
  }
  
  function getTime() {
    let today = new Date(Date.now()).toLocaleString();
    today = today.split(', ');
    return `Posted at ${today[1]} on ${today[0]}`;
  }
  
  const li = document.createElement('li');
  appendEl('span', 'textContent', text);
  appendEl('button', 'textContent', 'X', 'deleteButton');
  appendEl('button', 'textContent', '...', 'editButton');
  appendEl('span', 'textContent', getTime(), 'timeStamp');
  return li;
}

//Delete, edit and save buttons for each li

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
     const button = e.target;
     const li = button.parentNode;
     let action = button.textContent;
     let actionOptions = {
       "X": () => {
         ul.removeChild(li);
       },
       "...": () => {
         const span = li.firstElementChild;
         const input = document.createElement('textarea');
         input.value = span.textContent;
         li.insertBefore(input, span);
         li.removeChild(span);
         button.className = 'saveButton';
         button.textContent = 'save';
       },
       "save": () => {
         const input = li.firstElementChild;
           for(let word of arr) {
             if(input.value.toLowerCase().includes(word)) {
               return alert(`Please don't use inappropriate words.`); 
             }
           } 
         const span = document.createElement('span');
         span.textContent = input.value;
         li.insertBefore(span, input);
         li.removeChild(input);
         button.className = 'editButton';
         button.textContent = '...';
       }
     };
     actionOptions[action]();   
    }
});
