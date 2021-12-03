import {testData, data} from "./day3data.js";
console.log('day3')
//part 1
let gamma = '', epsilon ='';
let binaries = []

const diagnostic = data.trim().split('\n')//.map(Number)
for (let i = 0; i < diagnostic[0].length; i++) {
    binaries[i] = '';
}

diagnostic.forEach( measurement => {
    for (let i = 0; i < measurement.length; i++) {
        binaries[i] += measurement[i] === '1' ? '1':''
    }
})

binaries.forEach( x => {
    gamma += (x.length > diagnostic.length/2) ? '1' : '0'
    epsilon += !(x.length > diagnostic.length/2) ? '1' : '0'
})
console.log('epsilon: ', parseInt(epsilon,2), '  gamma: ' , parseInt(gamma,2))
console.log('power consumption: ' + ( parseInt(gamma,2) * parseInt(epsilon,2)) )
// 3549854

// part 2:
function getMostOrLeastCommon (arr, i, most){
    let survivors = [], commonOnes = '',mostCommon = '' ;
    arr.forEach(x => {
        commonOnes += x[i] === '1' ? '1' : ''
    })
    mostCommon = commonOnes.length >= arr.length/2 ? '1' : '0'

    arr.forEach(x => {
       if(most && x[i] === mostCommon) survivors.push(x)
       else if (!most && x[i] !== mostCommon) survivors.push(x)
    })
    console.log(survivors.length, ' survivors.length')
    if(survivors.length!==1) survivors = getMostOrLeastCommon(survivors,++i,most)
    return survivors
}

let oxygen = getMostOrLeastCommon(diagnostic, 0, true )
let scrubber = getMostOrLeastCommon(diagnostic, 0, false)


console.log('oxygen: ', parseInt(oxygen,2), '  scrubber: ' , parseInt(scrubber,2))
console.log('life support rating,: ' + ( parseInt(oxygen,2) * parseInt(scrubber,2)) )
// oxygen:  2783   scrubber:  1353
// life support rating,: 3765399