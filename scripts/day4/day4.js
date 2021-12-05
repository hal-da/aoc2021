console.log('day4')
import {data, testData} from "./day4data.js";

console.log(testData.boards)
let boards = data.boards.split('\n\n')
let draws = data.draws.split(',').map(String)
let allBoardsPlusInfo = {}
// create boards
function createEmptyBoards(){
    for (let i = 0; i <boards.length; i++) {
        let board = boards[i]
            .replaceAll('\n',' ')
            .trim().replaceAll('  ',' ')
            .split(' ')
            .map(String)

        allBoardsPlusInfo[i] = {
            board:board,
            indices:[],
            marked:[]
        }
    }
}


// lets draw part 1
createEmptyBoards()
let winningBoard = {}
for (let i = 0; i < draws.length; i++) {
    let draw = draws[i]
    Object.keys(allBoardsPlusInfo).forEach(key => {
        let index = allBoardsPlusInfo[key].board.indexOf(draw)
        if(index >= 0) {
            allBoardsPlusInfo[key].indices.push(index)
            allBoardsPlusInfo[key].indices.sort((a,b)=> a-b)
            allBoardsPlusInfo[key].marked.push(allBoardsPlusInfo[key].board[index])
            if(i>=5 && (checkVertical(allBoardsPlusInfo[key]) || checkVertical(allBoardsPlusInfo[key]) )){
                console.log(' BINGOOOOOOOOOOOOOOO!', draw)
                winningBoard = allBoardsPlusInfo[key]
                winningBoard['winningNumber'] = draw
                i = draws.length
            }
        }
    })
}

let sum = 0;
winningBoard.board.forEach(tile => sum += tile*1)
winningBoard.marked.forEach(mark => sum -= mark)

console.log(winningBoard)
console.log(sum, ' sum')
console.log(sum * winningBoard.winningNumber)

// lets lose part 2
createEmptyBoards()
let lastBoardToWin

for(let i = 0;i < draws.length; i++) {
    let draw = draws[i]

    Object.keys(allBoardsPlusInfo).forEach(key => {
        let indexIfDrawInBoard = allBoardsPlusInfo[key].board.indexOf(draw)
        if (indexIfDrawInBoard >= 0) {
            allBoardsPlusInfo[key].indices.push(indexIfDrawInBoard)
            allBoardsPlusInfo[key].indices.sort((a, b) => a - b)
            allBoardsPlusInfo[key].marked.push(draw)
            if (checkHorizontal(allBoardsPlusInfo[key]) || checkVertical(allBoardsPlusInfo[key])) {
                allBoardsPlusInfo[key]['lastDraw'] = draw
                lastBoardToWin = JSON.stringify(allBoardsPlusInfo[key])
                delete allBoardsPlusInfo[key]
            }
        }
    })
}

sum = 0;
lastBoardToWin = JSON.parse(lastBoardToWin)
lastBoardToWin.board.forEach(num => sum += num*1)
lastBoardToWin.marked.forEach(mark => sum -= mark)
console.log(lastBoardToWin, sum * lastBoardToWin.lastDraw)


function checkHorizontal (obj){
    for(let i = 0; i<obj.board.length; i=i+5){
        if(obj.indices.includes(i)
            && obj.indices.includes(i+1)
            && obj.indices.includes(i+2)
            && obj.indices.includes(i+3)
            && obj.indices.includes(i+4)
        ) return true
    }
}
function checkVertical(obj){
    for(let i=0;i<5;i++){
        if(obj.indices.includes(i)
        && obj.indices.includes(i+5)
        && obj.indices.includes(i+10)
        && obj.indices.includes(i+15)
        && obj.indices.includes(i+20)
        ) return true
    }
}