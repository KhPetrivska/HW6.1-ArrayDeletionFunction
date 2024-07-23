'use strict'

const firstInput = prompt("Enter something.");
if (!firstInput?.trim()) {
  alert("Your first input was either canceled or left empty. Refresh the page and try again.");
} else {
  const secondInput= prompt("Now enter characters that have to be removed from the previous input."); 
  if (!secondInput?.trim()) {
    alert("Your second input was either canceled or left empty. Refresh the page and try again.");
  } else {
    const secondInputArray = secondInput.toLowerCase().replace(' ','').split('')
    const result = filterSelectedCharacters(firstInput, secondInputArray)
    console.log(result)
  }
}

function filterSelectedCharacters (fullInput, extractions ) {
  const filteredInput = [];
  for (const character of fullInput) {
        if (!extractions.includes(character.toLowerCase())) {
          filteredInput.push(character);
      }
  }
return filteredInput.join('');
}