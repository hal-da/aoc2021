console.log('day10')
import {realData, testData} from "./day10data.js";
let data = realData.split('\n')
let regBracketPairs = new RegExp(/(\(\))|({})|(<>)|\[]/g)
let regOpeningBrackets = new RegExp(/\(+|{+|<+|\[+/g)
let points = {
    '(': 1,
    '[': 2,
    '{': 3,
    '<': 4,
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}
// part1()
part2()
function part2(){
    replaceAllBracketPairs()
    countOnlyRightSidesBrackets()
}
function part1(){
    replaceAllBracketPairs()
    replaceAllOpenRightSideBrackets()
    countTheFirstLeftSideBracket()
}
function countOnlyRightSidesBrackets(){
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
    console.log(part2sums.sort((a,b)=> a-b)[(part2sums.length-1)/2])
}

function replaceAllBracketPairs(){
    for (let i = 0; i < data.length; i++) {
        while (data[i].includes('()') || data[i].includes('[]') || data[i].includes('{}') || data[i].includes('<>')){
            data[i]= data[i].replaceAll(regBracketPairs,'')
        }
    }
}

function replaceAllOpenRightSideBrackets(){
    for (let i = 0; i < data.length; i++) {
            data[i]= data[i].replaceAll(regOpeningBrackets,'')
    }
}

function countTheFirstLeftSideBracket(){
    let errorSum = 0
    data.forEach(d => {
        if(d.length > 0) {
            errorSum += points[d[0]]
        }
    })
    console.log('errorSum: ', errorSum)
}