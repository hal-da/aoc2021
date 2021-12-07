console.log('day7')
import {testData, realData} from "./day7data.js";
let data = realData.split(',').sort((a,b)=>a-b).map(Number)
let answer = Array(data[data.length-1]).fill(0)
let part2 = true

for (let i = 0; i < data[data.length-1]; i++) {
    for (let j = 0; j < data.length; j++) {
        let diff =  Math.abs(data[j]-i)
        if( part2 ) diff = (diff * (diff+1))/2
        answer[i] += diff
    }
}
console.log(Math.min(...answer))