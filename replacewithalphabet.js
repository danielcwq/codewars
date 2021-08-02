function alphabetPosition(text) {
    var arr = text.toLowerCase().split('')
    var newArr = []
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for (let i = 0; i<arr.length; i++){
        var letterPosition = alphabet.indexOf(arr[i])+1;
        if (letterPosition >= 1){
            newArr.push(letterPosition)
        }
        
    }
    return newArr.join(' ')
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

  // voted best solution 
  function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }