console.log('day14')
import {realData, testData}  from "./day14data.js";
let myTempPolymer = [], dictionary = {}, myCount = {}
let polymer = testData.polymer
let insertions = testData.insertions.split('\n').map(x=> x.split(' -> ').join('').split(''))
let steps = 10

for (let i = 0; i < polymer.length; i++) {
    if(myCount[polymer[i]]) myCount[polymer[i]]++
    else myCount[polymer[i]] = 1
}
createDictPart2()
part2()


function part2(){
    // for (let i = 0; i < steps; i++) {
    //     letsInsert()
    // }

    // for (let i = 0; i < steps; i++) {
    //     createDictPart2(polymer)
    //
    //     applyInsert(polymer)
    //     insertions.forEach(insert => applyInsert(insert))
    //     countP2()
    // }


    console.log('myCount', myCount)
    console.log('dictionary',dictionary)
    console.log('insertions', insertions)
}


function letsInsert(){
    let toDelete = [], toCreate = []
    insertions.forEach(insert => {
        if(dictionary[insert[0]+''+insert[1]]) {

            toDelete.push(insert[0]+''+insert[1])
            toCreate.push(insert[0]+'' +insert[2])
            toCreate.push(insert[2]+'' +insert[1])
            //
            //
            // delete dictionary[insert[0]+''+insert[1]]
            // if(!dictionary[insert[0]+'' +insert[2]])dictionary[insert[0]+'' +insert[2]] =1
            // if(!dictionary[insert[2]+'' +insert[1]])dictionary[insert[2]+'' +insert[1]] =1
        }
    })
    deleteAndCreateDict(toDelete, toCreate)
    insertions.forEach(insert => {
        if (dictionary[insert[0] + '' + insert[1]]) {
            if (myCount[insert[2]]) myCount[insert[2]]++
            else myCount[insert[2]] = 1
        }
    })

}

function deleteAndCreateDict(toDelete, toCreate){
    toDelete.forEach(d => {
        delete dictionary[d]
    })

    toCreate.forEach(t => {
        if(!dictionary[t]) dictionary[t] =1
    })

}




function createDictPart2(){
    for (let i = 0; i < polymer.length-1; i++) {
        dictionary[polymer[i]+''+polymer[i+1]] = 1
    }
}



function part1(){
    createDictionary()

    for (let i = 0; i < steps; i++) {
        fillTempPolymer()
        substituteTmpPolymer()
    }
    countEmAll()
    console.log(myCount)
}

// console.log('done')
//
// // console.log(polymer)
// // countEmAll()
// console.log(myCount)
//
// console.log('polymer.length: ', polymer.length)
// // console.log(myTempPolymer)
// console.log(dictionary)

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
