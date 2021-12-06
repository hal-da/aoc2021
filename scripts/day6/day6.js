import {realData, testData} from "./day6data.js";
let data = realData.split(',').map(Number)
let days = 256
console.log('day6')
// part one and two
let schwarm = Array(9).fill(0), copy = []

// fill first fish school
data.forEach( fish => schwarm[fish]++)

for (let i = 0; i < days; i++) {
    for (let j = 0; j < schwarm.length-1; j++) {
        copy[j] = schwarm[j+1]
    }
    copy[6] += schwarm[0]
    copy[8] = schwarm[0]
    schwarm = [...copy]
}
let sum = 0
schwarm.forEach( x => sum += x)
console.log(sum)

//part one - first attempt
// console.log(data,  'first data')
function part1(){
    let allZeros = 0
    for (let i = 0; i < 80; i++) {
        data = data.map(x => --x)
        allZeros = data.filter(x => x === 0).length
        data = [...data,...Array(allZeros).fill(7),...Array(allZeros).fill(9)].filter(x => x > 0)
    }
    console.log(data.length)
}
