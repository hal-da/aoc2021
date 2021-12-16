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
let steps = 1


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
        let toDelete = []
        insertions.forEach(insertion => {
           let left = insertion[0], right = insertion[1], middle = insertion[2]
            let hastToBeInDict = left+right
            if(dictionary[hastToBeInDict]){
                let newLeftSpawn = left+middle, newRightSpawn = middle+right

                if(!tmpDict[newLeftSpawn])  tmpDict[newLeftSpawn] = 1
                if(!tmpDict[newRightSpawn]) tmpDict[newRightSpawn] = 1


                delete dictionary[hastToBeInDict]

                if(newRightSpawn === 'HB') console.log(insertion, 'dict',JSON.parse(JSON.stringify(dictionary)), 'tmp',JSON.parse(JSON.stringify(tmpDict)), i)
                if(newLeftSpawn === 'HB') console.log(insertion, 'dict',JSON.parse(JSON.stringify(dictionary)), 'tmp',JSON.parse(JSON.stringify(tmpDict)), i)

                dictionary = JSON.parse(JSON.stringify(tmpDict))
            }

        })
    }
}

function deleteOldCells(toDelete){
    console.log('delet')
    toDelete.forEach(cell => delete dictionary[cell])
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
    let test = 'NCNBCHB'
    // let test = 'NBCCNBBBCBHCB'
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
