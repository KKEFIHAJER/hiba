const minButton = document.getElementById('min');
const maxButton = document.getElementById('max');
const inputField = document.getElementById('input');


minButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    if(currentValue>10){
        inputField.value = currentValue - 1;
    }else(
        alert("quantite min superieur 10")
    )
    
  });
  maxButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    if(currentValue<=100){
inputField.value = currentValue + 1;
    }else(
        alert("quantite max superieur 100")
    )
    
  });