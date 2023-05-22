
const addBtn = document.querySelector('.addBtn');
const subBtn = document.querySelector('.subBtn');
const counterEl = document.querySelector('.counter');
const reset = document.querySelector('.reset');

let counter = 0; 

function updateCounter() {
  counterEl.value= counter;
}

addBtn.addEventListener('click', function() {
  counter += 1; 
  updateCounter(); 
});


subBtn.addEventListener('click', function() {
  counter -= 1; 
  updateCounter(); 
});

reset.addEventListener('click', function() {
    counter = 0; 
    updateCounter(); 
  });

updateCounter();