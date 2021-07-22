function mergesorted(a, b) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < a.length; i += 1) {
        if (a[i - 1] > a[i]) {
          done = false;
          var tmp = a[i - 1];
          a[i - 1] = a[i];
          a[i] = tmp;
        }
      }
    }
    var complete = false;
    while (!complete){
        complete = true;
        for (var g = 1; g<b.length; g+=1){
            if (b[g-1]>b[g]){
                complete = false;
                var temporary = b[g-1];
                b[g-1] = b[g];
                b[g] = temporary;

            }
        }
    }
    var finalArr = a.concat(b)
    
    
    var finished = false;
    while(!finished){
        finished = true;
        for (var h = 1; h<finalArr.length; h+=1){
            if (finalArr[h-1]>finalArr[h]){
                finished = false;
                var temp = finalArr[h-1];
                finalArr[h-1] = finalArr[h];
                finalArr[h] = temp;
            }
        }
    }
  
    return(finalArr)
  }
mergesorted([4],[1,2,3])
// or a much shorter way would have been this: 
function mergesorted(a, b) {
    var r = [];
    while(a.length && b.length){
      if(a[0] < b[0]) r.push(a.shift());
      else r.push(b.shift());
    }
    return r.concat(a).concat(b);
}