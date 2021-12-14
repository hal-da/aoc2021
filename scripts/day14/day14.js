console.log('day14')
import {realData, testData}  from "./day14data.js";
let myTempPolymer = [], dictionary = {}, myCount = {}
let polymer = realData.polymer
let insertions = realData.insertions.split('\n').map(x=> x.split(' -> ').join('').split(''))
let steps = 10

createDictionary()

for (let i = 0; i < steps; i++) {

    fillTempPolymer()
    substituteTmpPolymer()
}
countEmAll()
console.log(myCount)

console.log('polymer.length: ', polymer.length)
// console.log(myTempPolymer)
console.log(dictionary)

function countEmAll(){
    for (let i = 0; i < polymer.length; i++) {

        if(myCount[polymer[i]]) myCount[polymer[i]]++
        else myCount[polymer[i]]=1
    }
}

function substituteTmpPolymer(){
    for (let i = 0; i < myTempPolymer.length; i++) {
        myTempPolymer[i] = dictionary[myTempPolymer[i]]
    }
    myTempPolymer.push(polymer[polymer.length-1])
    polymer = myTempPolymer.join('')
}


function fillTempPolymer(){
    myTempPolymer = []
    for (let i = 0; i < polymer.length-1; i++) {
        myTempPolymer.push(polymer[i]+''+polymer[i+1])
    }
}

function createDictionary(){
    insertions.forEach(insertion => {
        dictionary[insertion[0]+''+insertion[1]] = insertion[0]+''+ insertion[2]
    })
}
