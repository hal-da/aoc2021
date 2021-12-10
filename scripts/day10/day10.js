console.log('day10')
import {realData, testData} from "./day10data.js";
let data = realData.split('\n')
part2()
function part2(){
    replaceAllPairs()
    countOnlyRightSidesBrackets()
}
function part1(){
    replaceAllPairs()
    replaceAllOpenRightSideBrackets()
    countTheFirstLeftSideBracket()
}
function countOnlyRightSidesBrackets(){
    let points = {
        '(': 1,
        '[': 2,
        '{': 3,
        '<': 4,
    }
    let part2sums =[]
    for (let i = 0; i < data.length; i++) {
        if(!data[i].includes(')') && !data[i].includes(']') && !data[i].includes('}') && !data[i].includes('>')){
            let sum = 0
            for (let j = data[i].length-1; j >= 0; j--) {
                sum *= 5
                sum += points[data[i][j]]
            }
            part2sums.push(sum)
        }
    }
    console.log(part2sums.sort((a,b)=> a-b)[Math.ceil(part2sums.length/2)-1])
}
function replaceAllPairs(){
    for (let i = 0; i < data.length; i++) {
        while (data[i].includes('()') || data[i].includes('[]') || data[i].includes('{}') || data[i].includes('<>')){
            data[i]= data[i]
                .replaceAll('()','')
                .replaceAll('[]','')
                .replaceAll('{}','')
                .replaceAll('<>','')
        }
    }
}
function replaceAllOpenRightSideBrackets(){
    for (let i = 0; i < data.length; i++) {
        while (data[i].includes('(') || data[i].includes('[') || data[i].includes('{') || data[i].includes('<')){
            data[i]= data[i]
                .replaceAll('(','')
                .replaceAll('[','')
                .replaceAll('{','')
                .replaceAll('<','')
        }
    }
}
function countTheFirstLeftSideBracket(){
    let errorSum = 0
    let prices = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137,
    }

    data.forEach(d => {
        if(d.length > 0) {
            errorSum += prices[d[0]]
        }
    })
    console.log('errorSum: ', errorSum)
}
