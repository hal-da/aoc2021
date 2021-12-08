console.log('day8c')
import {realData, testData, testData2} from "./day8data.js";
let data = realData.split('\n')
let alphabet, allDigits = [], forDigits= [], sum = 0

for (let i = 0; i < data.length; i++) {
    let alphabet = getAlphabet(i)
    console.log(data[i].split(' | ')[1].split(' '))
    let forDigits = data[i].split(' | ')[1].split(' ')
    let myNumString = ''
    forDigits.forEach(d => {
        myNumString += alphabet[d.split('').sort().join('')]
    })
    console.log(myNumString)
    console.log(alphabet)
    sum += myNumString *1
    console.log('-------------------------------------------------------------------------')
}
console.log(sum)

//NOT 1060214
function getAlphabet(i){
    alphabet = {
        0:'xxxxxxxxxxxxxx',
        1:'xxxxxxxxxxxxxx',
        2:'xxxxxxxxxxxxxx',
        3:'xxxxxxxxxxxxxx',
        4:'xxxxxxxxxxxxxx',
        5:'xxxxxxxxxxxxxx',
        6:'xxxxxxxxxxxxxx',
        7:'xxxxxxxxxxxxxx',
        8:'xxxxxxxxxxxxxx',
        9:'xxxxxxxxxxxxxx',
    }
    allDigits = data[i].split(' ').sort((a,b)=> a.length - b.length).map(x => x.split('').sort().join('').trim())
    for (let j = 0; j < 5; j++) {
        allDigits.forEach(s => {
            switch (s.length){
                case 2 : alphabet[s]=1
                    alphabet[1]=s
                    break
                case 3: alphabet[s]=7
                    alphabet[7]=s
                    break
                case 4: alphabet[s]=4
                    alphabet[4]=s
                    break
                case 7:alphabet[s]=8
                    alphabet[8]=s
                    break
                case 5:
                    if(s.includes(alphabet[1][0]) && s.includes(alphabet[1][1])
                        || s.includes(alphabet[7][0]) && s.includes(alphabet[7][1]) && s.includes(alphabet[7][2])
                    ) {
                        alphabet[3]=s
                        alphabet[s]=3
                        break
                    }
                    let x9 = 0
                    let x4 = 0
                    for (let j = 0; j < 5; j++) {
                        // console.log(s[j])
                        if(alphabet[9].includes(s[j])) x9++
                        if(alphabet[4].includes(s[j])) x4++

                    }
                    if(x4===3 ^ x9===5) {
                        alphabet[5]=s
                        alphabet[s]=5
                    } else if (x4=== 2 ^ x9 === 4){
                        alphabet[2]=s
                        alphabet[s]=2
                    }
                    break
                case 6:
                    if(!(s.includes(alphabet[1][0]) && s.includes(alphabet[1][1]))
                        || !(s.includes(alphabet[7][0]) && s.includes(alphabet[7][1]) && s.includes(alphabet[7][2]))

                    ) {
                        alphabet[6]=s
                        alphabet[s]=6
                        break
                    }
                    if(s.includes(alphabet[4][0]) && s.includes(alphabet[4][1]) && s.includes(alphabet[4][2]) && s.includes(alphabet[4][3])){
                        alphabet[9]=s
                        alphabet[s]=9
                    } else if(!(s.includes(alphabet[4][0]) && s.includes(alphabet[4][1]) && s.includes(alphabet[4][2]) && s.includes(alphabet[4][3]))) {
                        alphabet[0]=s
                        alphabet[s]=0
                    }

                    break
            }
        })

    }
    return alphabet
}

function part1(){
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].split(' | ')[1].split(' ')
        for (let j = 0; j < data[i].length; j++) {
            if(data[i][j].length <= 4 || data[i][j].length===7)  {
                sum++
            }
        }
    }
    console.log(sum)
}

// console.log(data)
// let alphabet = {
//     abcefg:0,
//     cf:1,
//     acdeg:2,
//     acdfg:3,
//     bcdf:4,
//     abdfg:5,
//     abdfeg:6,
//     acf:7,
//     abcdefg:8,
//     abcdfg:8
// }

/*
if(!(s.includes(alphabet[3][0])&& s.includes(alphabet[3][1]) && s.includes(alphabet[3][2]) && s.includes(alphabet[3][3]) && s.includes(alphabet[3][4])) &&
                        (s.includes(alphabet[4][0]) &&  s.includes(alphabet[4][1]) &&  s.includes(alphabet[4][2]) &&  s.includes(alphabet[4][3])) ) {
                        alphabet[s]=6
                        alphabet[6]=s
                    } else if ((s.includes(alphabet[3][0])&& s.includes(alphabet[3][1]) && s.includes(alphabet[3][2]) && s.includes(alphabet[3][3]) && s.includes(alphabet[3][4])) ||
                        (s.includes(alphabet[4][0]) &&  s.includes(alphabet[4][1]) &&  s.includes(alphabet[4][2]) &&  s.includes(alphabet[4][3]))){
                        alphabet[s]=9
                        alphabet[9]=s
                    } else if ((!s.includes(alphabet[3][0])&& s.includes(alphabet[3][1]) && s.includes(alphabet[3][2]) && s.includes(alphabet[3][3]) && s.includes(alphabet[3][4])) &&
                        !(s.includes(alphabet[4][0]) &&  s.includes(alphabet[4][1]) &&  s.includes(alphabet[4][2]) &&  s.includes(alphabet[4][3]))){
                        alphabet[0]=s
                        alphabet[s]=0
                    } else {
                        alphabet[s]=6
                        alphabet[6]=s
                    }
 */