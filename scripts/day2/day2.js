console.log('day2')
import {data, testData} from "./day2data.js";

const dataArr = data.split('\n')
console.log(dataArr)

const position = {
    horizontal: 0,
    depth:0,
}
dataArr.forEach(data => {
    const direction = data.split(' ');
    switch (direction[0]){
        case 'forward': position.horizontal += direction[1]*1
            break
        case 'down':position.depth += direction[1]*1
            break
        case 'up':position.depth -= direction[1]*1
            break
        default:
            console.log('should not happen')
    }
})
console.log(position)
console.log(position.depth * position.horizontal)
// 2
const positionAim = {
    horizontal: 0,
    depth:0,
    aim:0,
}
dataArr.forEach(data => {
    const direction = data.split(' ');
    switch (direction[0]){
        case 'forward':
            positionAim.horizontal += direction[1]*1
            positionAim.depth += positionAim.aim*direction[1]
            break
        case 'down':positionAim.aim += direction[1]*1
            break
        case 'up':positionAim.aim -= direction[1]*1
            break
        default:
            console.log('should not happen')
    }
})


console.table(positionAim)
console.log(positionAim.depth * positionAim.horizontal)