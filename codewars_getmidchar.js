function getMiddle(s)
{
  var arr = s.split('')
  var len = s.length;
  let middle = parseInt(len/2,10)
  var length = arr.length
  if (length % 2 == 0){
    console.log((arr[length/2-1]+ arr[(length/2)]))
} else{
    console.log(s[middle])
}
}
getMiddle('middle')
getMiddle('testing')

function printMiddleCharacter(str)
{
    // Finding string length
    let len = str.length;

    // Finding middle index of string
    let middle = parseInt(len / 2, 10);

    // Print the middle character
    // of the string
    console.log(str[middle]);
}
 
// Given string str
let str = "GeeksForGeeks";

// Function Call

printMiddleCharacter('testing')
// really do need to figure out how to make my lines of code more concise by using more built in features, right now im surviving only on loops
// and arrays. 

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}