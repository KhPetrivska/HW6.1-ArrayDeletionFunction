'use strict'
const filterSelectedCharacters = function(fullInput, extractions ) {
  let filteredInput = [];
    for (let character of fullInput){
      if (!extractions.toLowerCase().includes(character.toLowerCase()) || character === ' ' ){
        filteredInput.push(character);
      }
  }
return filteredInput.join('');
}

const firstInput = prompt("Enter something.");
if (!firstInput?.trim()) {
  alert("Your first input was either canceled or left empty. Refresh the page and try again.")
}else{
  const secondInput= prompt("Now enter characters that have to be removed from the previous input."); 
  if (!secondInput?.trim()){
    alert("Your second input was either canceled or left empty. Refresh the page and try again.")
  }else{
    console.log(filterSelectedCharacters(firstInput, secondInput));
  }
}