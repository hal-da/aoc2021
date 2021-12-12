console.log('day12')
import {d} from "./day12data.js"
import {solutions} from "./day12data.js";
let solution = solutions.testDataSmall
let data = d.testDataBig.split('\n').map(x=>x.split('-').sort(x=>x[0]-x[1]))
let nodes = {}
let mySolution = []

data.forEach(d => {
    pushToNodes(d[0],d[1])
    if(d[0] === d[0].toUpperCase()) pushToNodes(d[1],d[0])
})
// getRidOfMeat()

// findAllSolutions('start')
console.log(data)
console.log(nodes)
console.log(solution.split('\n').sort((x,y)=> x.length-y.length))


function findAllSolutions(k){
    console.log(k, ' k')
        nodes[k].forEach(node => {
            mySolution.push(node)
            console.log(node, ' from findAllSolutions')
        })
}

function getRidOfMeat(){
    Object.values(nodes).forEach(node => {
        for (let i = 0; i < node.length; i++) {
            if(!nodes[node[i]] ) {
                node.splice(i, 1)
                i--
            }
        }
    })
    delete nodes.end
}



function pushToNodes(k, v){
    if(!nodes[k])  nodes[k] = [v]
    else if(nodes[k]!=='start') nodes[k].push(v)
}


function getRidOfEndpoints(){


    console.log(nodes, ' nodes')
    // for (let i = 0; i < data.length; i++) {
    //     let kick = true
    //
    //     for (let j = 0; j < data.length; j++) {
    //         if(data[i][j][1] === 'end' || data[i][j][0] === data[i][j][0].toUpperCase() ||  )
    //     }
    // }



    // dataObjects.forEach(a => {
    //     let v = Object.values(a)[0]
    //     let kick = true
    //     dataObjects.forEach(ob => {
    //         console.log(ob[v])
    //         // if(ob[v] && ob[v] === 'end' ) kick = false
    //     })
    //     // console.log(v, kick)
    // })


    //
    // Object.keys(dataObjects).forEach(key =>{
    //     // console.log(key)
    //     // let tmpObj = dataObjects[key]
    //     // console.log(tmpObj)
    //     let v = Object.values(dataObjects[key])[0]
    //     let kick = true
    //     for (let i = 0; i < dataObjects.length; i++) {
    //         if(v !== 'end' && dataObjects[i][v]) {
    //             // console.log('got it', v)
    //             kick = false
    //             i=100
    //         }
    //         if(kick)console.log('did not find ', v)
    //     }
    //
    //
    //     // dataObjects.forEach(d => {
    //     //     if(d[v]) {
    //     //         console.log(d[v])
    //     //
    //     //
    //     //     console.log(v, ' does not exist')
    //     // })
    //     // console.log(v)
    //     // console.log(dataObjects[v], ' undefinded?')
    //
    // })
    //
    //

}