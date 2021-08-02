function duplicateEncode(word){
    var newArr = []
    var resultArr = []
    var arr = word.split('')
    for (let i = 0; i<arr.length; i++){
        if (newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
            resultArr.push('(')
        }else if (newArr.indexOf(arr[i])>-1) {
            resultArr.push(')')
            resultArr.splice()// problem with my code is that it doesn't handle the first instance of any duplicate, which sucks, couldn't figure out a way to bypasss
        }
    }
    return resultArr.join('')
}

console.log(duplicateEncode('recede'))

/*function duplicateEncode(word){
    var newArr = []
    var arr = word.split('')
    for (let i = 0)
}
*/

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
  function duplicateEncode(word){
    function count(word, char) {
      var result = 0;
      for (var index = 0, len = word.length; index < len; index++) {
        if (word[index] == char) result++;
      }
        
      return result;
    }
      
    var result = [];
    var lowerCasedWord = word.toLowerCase();
    for (var index = 0, len = lowerCasedWord.length; index < len; index++) {
      if (count(lowerCasedWord, lowerCasedWord[index]) > 1)
        result.push(")");
      else
        result.push("(");
    }  
    
    return result.join('');
  }