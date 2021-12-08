console.log('day8')
import {realData, testData, testData2} from "./day8data.js";
let data = realData.split('\n')

function part1(){
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].split(' | ')[1].split(' ')
        for (let j = 0; j < data[i].length; j++) {
            if(data[i][j].length <= 4 || data[i][j].length===7)  {
                sum++
            }
        }
    }
    console.log(sum)
}

console.log(data)
let alphabet = {
    abcefg:0,
    cf:1,
    acdeg:2,
    acdfg:3,
    bcdf:4,
    abdfg:5,
    abdfeg:6,
    acf:7,
    abcdefg:8,
    abcdfg:8
}
