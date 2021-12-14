console.log('day12')
import {d} from "./day12data.js"
import {solutions} from "./day12data.js";
let solution = solutions.testDataSmall
let data = d.testDataSmall.split('\n').map(x=>x.split('-').sort(x=>x[0]-x[1]))
let nodes = {}
let mySolution = []
let visitedList = {}

createAdjacentList()
createVisitedList()
followList('start')

console.log('visited list: ',visitedList)
console.log('nodes:',nodes)
console.log('mySolution:', mySolution, )
console.log(solution  )
function createAdjacentList(){
    data.forEach(d => {
        pushToNodes(d[0],d[1])
        pushToNodes(d[1],d[0])
        // if(d[0] === d[0].toUpperCase()) pushToNodes(d[1],d[0])
    })

    // Object.keys(nodes).forEach(k
    // ey => {
    //     console.log(nodes[key].length)
    //     // console.log(nodes[key])
    //     // for (let i = 0; i < nodes[key].length; i++) {
    //     //     if(nodes[key][i]==='start') {
    //     //         console.log('should slice here',nodes[key][i] )
    //     //         nodes[key].splice(i, 1)
    //     //     }
    //     // }
    //     if(nodes[key].length===1 && nodes[key][0].toLowerCase()===nodes[key][0] ) {
    //         let keyToDelete = key
    //         Object.keys(nodes).forEach(key => {
    //             for (let i = 0; i < nodes[key].length; i++) {
    //             if(nodes[key][i]===keyToDelete) {
    //                 console.log('should slice here', keyToDelete)
    //                 nodes[key].splice(i, 1)
    //                 }
    //             }
    //         })
    //         delete nodes[key]
    //     }
    // })
    // delete nodes.end
}

function followList(start){
    const stack = [start]
    let oneWay = []
    while (stack.length > 0){
        const current = stack.pop()
        oneWay.push(current)
        for (let i = 0; i < nodes[current].length; i++) {

        // }
        // for(let neighbour of nodes[current]){

            if(nodes[current][i]==='end') {
                oneWay.push('end')
                mySolution.push(oneWay)
                oneWay=[]
                // createVisitedList()
            } else {
                if(!visitedList[current][i]) {
                    stack.push(nodes[current][i])
                    // createVisitedList()
                    visitedList[current][i] = true
                }
            }
        }
    }
}


function pushToNodes(k, v){
        if(!nodes[k])  nodes[k] = [v]
        else nodes[k].push(v)
}
function createVisitedList(){
    Object.keys(nodes).forEach(node => {
        visitedList[node]=Array(nodes[node].length).fill(false)

    })
}
