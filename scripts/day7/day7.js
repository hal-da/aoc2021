console.log('day7')
import {testData, realData} from "./day7data.js";
let data = realData.split(',').map(Number)

//data = data.sort((a,b)=>a-b)
console.log(data)
console.log(data.length)
console.log(data.reduce((a,b)=>a+b))
console.log(data[data.length-1])
let durchschnitt = Math.floor(data.reduce((a,b)=>a+b)/data.length)
console.log(durchschnitt)

let answer = Array(data[data.length-1]).fill(0)
for (let i = 0; i < data[data.length-1]; i++) {
    for (let j = 0; j < data.length; j++) {
        let diff =  data[j]-i
        if(diff < 0 ) diff *= -1
        diff = (diff * (diff+1))/2
        // console.log('Move from ', data[j], ' to ', i, ': ', diff)
        answer[i] += diff
    }
    // console.log('summe: ', answer[i])
    // console.log(' NEXT I ')
}
console.log(answer.sort((a,b)=>a-b))
let smallest = answer.sort((a,b)=>a-b)[0]
console.log(smallest)

// (n × ( n + 1))/2

function part1(){
    let x = Array(1300).fill(0)
    for (let i = 200; i < 1500; i++) {
        data.forEach(d=>{
            let s = d - i
            if(s<0) s *= -1
            x[i-200] += s
        })
    }
    console.log(x.sort((a,b)=>a-b))
    // ok weiß der geier wieso aber das funktioniert

}

