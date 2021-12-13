console.log('day12')
import {d} from "./day12data.js"
import {solutions} from "./day12data.js";
let solution = solutions.testDataSmall
let data = d.testDataSmall.split('\n').map(x=>x.split('-').sort(x=>x[0]-x[1]))
let nodes = {}
createObj()
console.log(nodes)
function createObj(){
    data.forEach(d => {
        pushToNodes(d[0],d[1])
        pushToNodes(d[1],d[0])
        // if(d[0] === d[0].toUpperCase()) pushToNodes(d[1],d[0])
    })
    Object.keys(nodes).forEach(key => {

        if (nodes[key].length === 1 && nodes[key][0].toLowerCase() === nodes[key][0]) {
            let keyToDelete = key
            Object.keys(nodes).forEach(key => {
                for (let i = 0; i < nodes[key].length; i++) {
                    if (nodes[key][i] === keyToDelete) {
                        console.log('should slice here', keyToDelete)
                        nodes[key].splice(i, 1)
                    }
                }
            })
            delete nodes[key]
        }
    })
}

function pushToNodes(k, v){
    if(!nodes[k])  nodes[k] = [v]
    else nodes[k].push(v)
}
