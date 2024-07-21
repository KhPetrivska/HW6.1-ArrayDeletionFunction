'use strict'
const filterUserInput = function(fullInput, extractions ) {
  let filteredInput = [];
    for (let character of fullInput){
      if (!extractions.toLowerCase().includes(character.toLowerCase()) || character === ' ' ){
        filteredInput.push(character);
      }
  }
return filteredInput.join('');
}

const firstInput = prompt("Enter something.");
const secondInput= prompt("Now enter characters that have to be removed from the previous input.");

if ((!firstInput?.trim()) || (!secondInput?.trim())) {
  alert("At least one of the inputs was either canceled or left empty. Refresh the page and try again.")
}else{
console.log(filterUserInput(firstInput, secondInput));
}