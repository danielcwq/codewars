function DNAStrand(dna){
    var arr = dna.split('')
    var output = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === 'A'){
            output.push('T')
        }else if (arr[i] === 'T'){
            output.push('A')
        }else if (arr[i] === 'C'){
            output.push('G')
        }else if (arr[i]==='G'){
            output.push('C')
        }
    }
    return(output)
  }
  DNAStrand('ATCG')

  // here's a more elegant way of doing it: using regex::
  function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }