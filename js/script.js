let counterDisplay = document.createElement('h1'); //create h1
let buttonPlus = document.createElement('button'); //create plus button
let buttonMinus = document.createElement('button'); //create minus button

//add h1 to HTML
counterDisplay.innerHTML = '0'; 
document.body.appendChild(counterDisplay);


//add plus button to HTML
buttonPlus.innerHTML = '+';
document.body.appendChild(buttonPlus);
buttonPlus.classList.add('button-plus');

//add minus buttom to HTML
buttonMinus.innerHTML = '-';
document.body.appendChild(buttonMinus);


let count = 0; //initialize count

//create plus button event
buttonPlus.addEventListener('click', () =>{
    count++;
    updateDisplay();
  });

  //create minus button event
buttonMinus.addEventListener('click', () =>{
       count--;
       updateDisplay();
  });

  //update display
  function updateDisplay(){
      counterDisplay.innerHTML = count;
  };



