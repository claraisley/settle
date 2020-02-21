

const personalizeText = function(arr, text) {
  let newText = text
  
  for (const interest of arr) {
    let userValue = interest.value;
    
    switch (interest.interest_id) {
      case 1:
        const regex = /petName/;
        newText = newText.replace(regex, userValue);
        break;
      case 2:
        const regex1 = /friendName/;
        newText = newText.replace(regex1, userValue);
        break;
      case 3:
        const regex2 = /hobbyName/;
        newText = newText.replace(regex2, userValue);
        break;
      case 4:
        const regex3 = /sportName/;
        newText = newText.replace(regex3, userValue);
        break;
    }
  }
  return newText
};

export default personalizeText