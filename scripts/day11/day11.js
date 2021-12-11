console.log('day11')
import {realData,testData, testDataA} from "./day11data.js";
let data = realData.split('\n').map(x=>x.split('').map(Number))
let rounds = 100
let flashCounter = 0

flash()

function flash(){
    let stillExploding = true
    let round = 0 // part2
    // for (let round = 1; round <= rounds; round++) {   // Part1
    while (!nSync()){ // part2
        round++ // part2
        octopusTick()
        stillExploding=true
        while (stillExploding) {
            stillExploding = false
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if(data[i][j]>9) {
                        data[i][j]=0
                        tickleSurroundingOctopussys(i,j)
                        stillExploding = true
                        flashCounter++
                    }
                }
            }
        }
        console.log(JSON.parse(JSON.stringify(data)),'after ',round)
    }
}

console.log(flashCounter)

function nSync(){
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if(data[i][j]!==0)return false
        }
    }
    return true
}

function octopusTick(){
    data.forEach(x=>{
        for (let i = 0; i < x.length; i++) x[i]++
    })
}

function tickleSurroundingOctopussys(i,j){
    for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
            if(i+k >= 0 && i+k < data.length && j+l>=0 && j+l < data.length && data[i + k][j + l]>0)data[i + k][j + l]++
        }
    }
}
