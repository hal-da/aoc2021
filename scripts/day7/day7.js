console.log('day7')
import {testData, realData} from "./day7data.js";
let data = realData.split(',').map(Number)
let answer = Array(data[data.length-1]).fill(0)
let part2 = true

for (let i = 0; i < data[data.length-1]; i++) {
    for (let j = 0; j < data.length; j++) {
        let diff =  data[j]-i
        if(diff < 0 ) diff *= -1
        if( part2 ) diff = (diff * (diff+1))/2
        // console.log('Move from ', data[j], ' to ', i, ': ', diff)
        answer[i] += diff
    }
}
let smallest = answer.sort((a,b)=>a-b)[0]
console.log(smallest)