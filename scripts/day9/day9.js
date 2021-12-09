console.log('day9')
import {realData, testData} from "./day9data.js";
let data = realData.split('\n').map(x=> x.split(''))
let dataWithFrame = [],point, above, under, left, right, sumArr = []
createFrameForArrays()

for (let i = 1; i < dataWithFrame.length-1; i++) {
    for (let j = 1; j <= dataWithFrame[0].length-1; j++) {
        point = dataWithFrame[i][j]
        above = dataWithFrame[i+1][j]
        under = dataWithFrame[i-1][j]
        left  = dataWithFrame[i][j-1]
        right = dataWithFrame[i][j+1]

        if(above > point && under > point && left > point && right > point) {
            //part1:
            let sum = 1;
            dataWithFrame[i][j] = 0
            sum += checkNeighbours(i,j)
            sumArr.push(sum)
        }
    }
}

sumArr.sort((a,b)=> a-b).reverse()
console.log(sumArr[0]*sumArr[1]*sumArr[2])

function createFrameForArrays(){
    dataWithFrame[0] = Array(data[0].length+2).fill(9)
    for (let i = 0; i < data.length; i++) {
        dataWithFrame[i+1]= [9,...data[i].map(Number),9]
    }
    dataWithFrame.push(Array(data[0].length+2).fill(9))
}


function checkNeighbours(x,y){
    let coordsI = [],coordsJ = [], sum = 0
    coordsI.push(x)
    coordsJ.push(y)

    while (coordsJ.length > 0) {

        let i = coordsI[0]
        let j = coordsJ[0]

        above = dataWithFrame[i+1][j]
        under = dataWithFrame[i-1][j]
        left = dataWithFrame[i][j-1]
        right = dataWithFrame[i][j+1]

        if (above !== 9 && above !== 0) {
            sum++
            dataWithFrame[i+1][j] = 0
            coordsI.push(i+1)
            coordsJ.push(j)

        }
        if (under !== 9 && under !== 0) {
            sum++
            dataWithFrame[i-1][j] = 0
            coordsI.push(i-1)
            coordsJ.push(j)
        }
        if (left !== 9 && left !== 0) {
            sum++
            dataWithFrame[i][j-1] = 0
            coordsI.push(i)
            coordsJ.push(j-1)
        }
        if (right !== 9 && right !== 0) {
            sum++
            dataWithFrame[i][j+1] = 0
            coordsI.push(i)
            coordsJ.push(j+1)
        }
        coordsI.shift()
        coordsJ.shift()
    }
    return sum
}

// console.log('part1:', lows.reduce((a,b)=>(a+b))+lows.length)
