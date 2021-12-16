import {realData, testData, testDatax5} from "./day15data.js";

class Cell{
    constructor(cost, i, j) {
        this.cost = cost
        this.i = i
        this.j = j
        this.f = 0
        this.g = 0
        this.h = 0
        this.neighbours = []
    }

    addNeighbours(){
        let i = this.i
        let j = this.j

        if(i < cellMaze.length-1){
            this.neighbours.push(cellMaze[i+1][j])
        }
        if(i > 0){
            this.neighbours.push(cellMaze[i - 1][j])
        }
        if(j < cellMaze[0].length-1){
            this.neighbours.push(cellMaze[i][j+1])
        }
        if(j > 0){
            this.neighbours.push(cellMaze[i][j-1])
        }
    }
}

console.log('day15')
let testMazeX5 = testDatax5.split('\n').map(x=> x.split('').map(Number))
let maze = testData.split('\n').map(x=> x.split('').map(Number))
// let maze

console.log(maze.length)
console.log(maze[maze.length-1].length)

let cellMaze  = [], openSet = [], closedSet = [], path = []
// createCellMaze()
// createMazeFromX()
createTestMaze()
let start = cellMaze[0][0], target = cellMaze[cellMaze.length-1][cellMaze[0].length-1]
let estimation = getTheH(start, target)

console.log(start)
let error = '', errorCount = 0

for (let i = 0; i < testMazeX5.length; i++) {
    for (let j = 0; j < testMazeX5[0].length; j++) {
        // console.log(testMazeX5[i][j] === cellMaze[i][j])
        if(testMazeX5[i][j] !== cellMaze[i][j]) {
            error += i + '/' + j + ' - is ' + cellMaze[i][j] + ' but should be ' + testMazeX5[i][j] + ',  '
            errorCount++
        }
    }
}
console.log(error)
console.log(errorCount)



// walkTheWalk()
console.log(closedSet)

function getTheH(neighbour, target) {
    // console.log(neighbour, target)
    let a = target.i - neighbour.i
    let b = target.j - neighbour.j
    // return Math.abs(neighbour.i - target.i ) + Math.abs(neighbour.j-target.)

    return  Math.floor(Math.sqrt(a*a + b*b))
}

function walkTheWalk(){

    let steps = 0
    openSet.push(start)
    while (openSet.length > 0){
        // console.log('..')
        openSet.sort((x,y) => x.cost - y.cost)
        // console.log(openSet)
        let current = openSet.shift()

        if (current === target) {
            console.log('steps:', steps, 'ole')
            let tmp = current
            path.push(tmp)

            while (tmp.prev){
                path.push(tmp.prev)
                tmp = tmp.prev
            }
            // console.log(path.length
            let cost = 0
            path.forEach(p => {
                cost += p.cost
            })
            // console.log('cost:', cost)
            console.log('path:',path.reverse())
            return
        }

        closedSet.push(current)

        let currentNeighbours = current.neighbours
        currentNeighbours.forEach(neighbour => {
            if(!closedSet.includes(neighbour)){
                let tmpCost = current.cost + neighbour.cost
                if (openSet.includes(neighbour)){
                    if(tmpCost < neighbour.cost) {
                        neighbour.cost = tmpCost
                    }
                } else {
                    neighbour.cost = tmpCost
                    openSet.push(neighbour)

                }

                neighbour.h = getTheH(neighbour, target)
                neighbour.f = neighbour.h + neighbour.cost
                neighbour.prev = current
            }

        })

    }
}


// console.log(maze)
// console.log(cellMaze)
console.log('start', start)
console.log('target', target)
console.log('estimation', estimation)





function createCellMaze(){
    for (let i = 0; i < maze.length; i++) {
        cellMaze[i] = []
        for (let j = 0; j < maze[0].length; j++) {
            cellMaze[i][j] = new Cell(maze[i][j], i, j)
        }
    }
    cellMaze.forEach(row => {
        row.forEach(cell => cell.addNeighbours())
    })
}

function createMazeFromX(){
    // for (let x = 0; x < 25; x +=5) {
        for (let i = 0; i < maze.length*5; i++) {
            cellMaze[i] = []
            for (let j = 0; j < maze.length*5; j++) {
                // console.log(i, i%maze.length)
                // console.log(j, j%maze.length)
                let toAdd = maze[i%maze.length][j%maze.length] > 9 ? maze[i%maze.length][j%maze.length]%9: maze[i%maze.length][j%maze.length]
                cellMaze[i][j] =  new Cell(toAdd, i, j)
                maze[i%maze.length][j%maze.length]++
            }
            for (let j = 0; j < maze.length; j++) {
                    maze[i][j] -= 5
                    if (maze[i][j] <= 0 ) maze[i][j] += 9

            }
        }
    cellMaze.forEach(row => {
        row.forEach(cell => cell.addNeighbours())
    })
    // }
    console.log(cellMaze)
}

function createTestMaze(){
    for (let i = 0; i < maze.length*5; i++) {
        cellMaze[i] = []
        for (let j = 0; j < maze.length*5; j++) {
            // console.log(i, i%maze.length)
            // console.log(j, j%maze.length)
            cellMaze[i][j] = maze[i % maze.length][j % maze.length] > 9 ? maze[i % maze.length][j % maze.length] % 9 : maze[i % maze.length][j % maze.length]
            maze[i%maze.length][j%maze.length]++
        }
        console.log('i',i)
        for (let j = 0; j < maze.length-1; j++) {
            maze[i][j] -= 5
            if (maze[i][j] <= 0 ) maze[i][j] += 9

        }
    }
    console.log(cellMaze)
}
