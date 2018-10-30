'use strict';

//select (one) by tag: the first that matches
//const para = document.querySelector('p');
//para.innerHTML = 'content changed';

//select by ID
//const para = document.querySelector('#test');
//para.innerHTML = 'I added something <strong> new </strong> and different';

//select all by tag name
// const paras = document.querySelectorAll('p');
// paras[0].innerHTML = 'new content';
//document.getElementById("test").innerHTML = "content changed";

//select by class name
//const examples = document.querySelectorAll('.example');
// console.log(examples);
// examples[0].style.fontStyle = 'italic';
// examples[1].style.color = 'blue';

// //for loop
// for(let i=0; i<examples.length; i++){
//   console.log(examples[i]);
//   examples[i].setAttribute('style', 'color: green');
//   examples[i].addEventListener(changeColor());
// }
//
// //for of
// for(const example of examples){
//   example.innerHTML = 'content modified';
// }
//
// //for each
// examples.forEach(example =>{
//   example.innerHTML = 'again new content';
// })


//event listener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//Events: https://www.w3schools.com/js/js_events.asp

const para = document.querySelector('#test');
  para.addEventListener('click', (evt) => {
  console.log(evt.currentTarget);
  //para.innerHTML = 'someone clicked on me';
  evt.currentTarget.setAttribute('style', 'background: pink');
});


  //arrow function needs to be before where it is called
const changeColor = (evt)=>{
  console.log(evt.currentTarget);
  evt.currentTarget.setAttribute('style', 'background: pink');
};


const examples = document.querySelectorAll('.example');
for(let i=0; i<2; i++){
  examples[i].setAttribute('style', 'color: green');
  examples[i].addEventListener('click', changeColor);
}



