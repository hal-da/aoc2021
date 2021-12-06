console.log('day6')
import {realData, testData} from "./day6data.js";
let days = 256
let swarm = Array(9).fill(0), swarmCopy = []
realData.split(',').forEach(fish => swarm[fish]++)

for (let i = 0; i < days; i++) {
    for (let j = 0; j < swarm.length-1; j++) {
        swarmCopy[j] = swarm[j+1]
    }
    swarmCopy[6] += swarm[0]
    swarmCopy[8] = swarm[0]
    swarm = [...swarmCopy]
}
console.log(swarm.reduce((a,b)=> a+b))