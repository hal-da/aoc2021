console.log('day14part2')
import {realData, testData}  from "./day14data.js";
let myTempPolymer = [], dictionary = {}, myCount = {
    B:0,
    C:0,
    H:0,
    N:0
}
let polymer = testData.polymer
let insertions = testData.insertions.split('\n').map(x=> x.split(' -> ').join('').split(''))
let steps = 20


createDictPart2()
createTestDict()



// for (let i = 0; i < polymer.length; i++) {
//     if(myCount[polymer[i]]) myCount[polymer[i]]++
//     else myCount[polymer[i]] = 1
// }

runInsertion(steps)


function runInsertion(steps){
    for (let i = 0; i < steps; i++) {
        let tmpDict = {}
        insertions.forEach(insertion => {
            if(dictionary[insertion[0]+''+insertion[1]]){
                console.log(insertion)
                myCount[insertion[2]]++

                if(!tmpDict[insertion[0]+''+insertion[2]]) tmpDict[insertion[0]+''+insertion[2]] = 1

                if(!tmpDict[insertion[2]+''+insertion[1]]) tmpDict[insertion[2]+''+insertion[1]] = 1

            } else {
                // console.log('nop',insertion )
            }

        })
        dictionary = tmpDict
    }
}

// Object.keys(dictionary).forEach(k => {
//     let first = k.split('')[0]
//     let second = k.split('')[1]
//     myCount[first] += dictionary[k]
//     myCount[second] += dictionary[k]
//     // console.log(dictionary[k])
//     // console.log(first)
//     // console.log(second)
// })


function createDictPart2(){

    console.log(polymer)
    for (let i = 0; i < polymer.length-1; i++) {
        if(!dictionary[polymer[i]+''+polymer[i+1]]) dictionary[polymer[i]+''+polymer[i+1]] = 1
        else dictionary[polymer[i]+''+polymer[i+1]]++
    }
    for (let i = 0; i < polymer.length; i++) {
        myCount[polymer[i]]++
    }

    console.log(dictionary)
}
function createTestDict(){
    let testDic = {}
    // let test = 'NCNBCHB'
    let test = 'NBCCNBBBCBHCB'
    // let test = 'NBBBCNCCNBBNBNBBCHBHHBCHB'
    for (let i = 0; i < test.length-1; i++) {
        if(!testDic[test[i]+''+test[i+1]])testDic[test[i]+''+test[i+1]] = 1
        else testDic[test[i]+''+test[i+1]]++
    }
    console.log('testDic', testDic)
let testcnt = {
        B:0,
    C:0,
    H:0,
    N:0}

    for (let i = 0; i < test.length; i++) {
        testcnt[test[i]]++
    }
    console.log('testcnt', testcnt)
}

console.log('myCount', myCount)
console.log('dictionary',dictionary)
console.log('insertions', insertions)