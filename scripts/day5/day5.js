
console.log('day5a')
import { testData, realData} from "./day5data.js";

let data = testData.split('\n')
let grid = createGrid(10,10)
let allReadings = []

getReadings()
drawLines()

console.table(grid)

let crossings = countCrossings()
console.log('crossings: ', crossings)


function drawLines(){
    allReadings.forEach(reading => {
        let x1= reading[0][0], y1=reading[0][1], x2= reading[1][0], y2=reading[1][1]

        if     (x1 > x2 && y1 > y2) drawX1andY1bigger(x1, y1, x2)
        else if(x1 > x2 && y1 < y2) drawX1andY2areBigger(x1, y1, x2)
        else if(x1 < x2 && y1 < y2) drawX2andY2areBigger(x1, y1, x2)
        else if(x1 < x2 && y1 > y2) drawX2andY1areBigger(x1, y1, x2)
        else if(y1===y2){
            if(x1 > x2) drawHorizontal(y2,x2,x1)
            else drawHorizontal(y2,x1,x2)
        } else if(x1===x2) {
            if(y1>y2) drawVertical(x1, y2, y1)
            else drawVertical(x1, y1, y2)
        }
    })
}

// diagonal drawings
function drawX2andY1areBigger(x1, y1, x2){
    for(;x1<=x2;x1++,y1--){
        grid[y1][x1]++
    }
}

function drawX2andY2areBigger(x1, y1, x2){
    for(;x1<=x2;x1++,y1++) {
        grid[y1][x1]++
    }
}

function drawX1andY2areBigger(x1, y1, x2){
    for(;x1>=x2;x1--,y1++) {
        grid[y1][x1]++
    }
}

function drawX1andY1bigger(x1, y1, x2){
    for(;x1>=x2;x1--, y1--) {
        grid[y1][x1]++
    }
}

// horizontal drawings
function drawHorizontal(row, startCol, endCol){
    for (let i = startCol; i <= endCol ; i++) {
        grid[row][i]++
    }
}
function drawVertical(col, startRow, endRow){

    for (let i = startRow; i <= endRow; i++) {
        grid[i][col]++
    }
}

function getReadings(){
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].split(' -> ')
        for (let j = 0; j < data[i].length; j++) {
            data[i][j] = data[i][j].split(',').map(Number)
        }
        allReadings.push(data[i])
    }
}

function createGrid (cols) {
    let grid = []
    for (let i = 0; i < cols; i++) {
        grid[i] = Array(cols).fill(0)
    }
    return grid
}

function countCrossings(){
    let crossings = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] >=2) {
                crossings++
            }
        }
    }
    return crossings
}