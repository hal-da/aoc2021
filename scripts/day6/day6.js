import {realData, testData} from "./day6data.js";

let data = realData.split(',').map(Number)
console.log('day6')

// part one
console.log(data,  'first data')
function part1(){
    let zeros = 0, newSpawns = [], oldFisch = [], allZeros = 0
    for (let i = 0; i < 80; i++) {
        data = data.map(x => --x)
        allZeros = data.filter(x => x === 0).length
        data = [...data,...Array(allZeros).fill(7),...Array(allZeros).fill(9)].filter(x => x > 0)
    }
}

// part two

let schwarm = []
for (let i = 0; i < 9; i++) {
    schwarm[i] = 0
}
// fill first fish school
data.forEach( fish => schwarm[fish]++)

let copy = []

for (let i = 0; i < 256; i++) {
    for (let j = 0; j < schwarm.length-1; j++) {
        copy[j] = schwarm[j+1]
    }
    copy[6] += schwarm[0]
    copy[8] = schwarm[0]
    for (let j = 0; j < schwarm.length; j++) {
        schwarm[j] = copy[j]
    }
}
let sum = 0
schwarm.forEach( x => sum += x)
console.log(sum)