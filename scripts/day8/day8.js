console.log('day8c')
import {realData, testData, testData2} from "./day8data.js";
let data = realData.split('\n')
let alphabet, allDigits = [], forDigits= [], sum = 0, myNumString = ''

for (let i = 0; i < data.length; i++) {
    getAlphabet(i)
    forDigits = data[i].split(' | ')[1].split(' ')
    myNumString = ''
    forDigits.forEach(d => {
        myNumString += alphabet[d.split('').sort().join('')]
    })
    sum += myNumString *1
}
console.log(sum)//946346

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
    allDigits = data[i].split(' ').sort((a,b)=> a.length - b.length).map(x => x.split('').sort().join(''))
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
                    || s.includes(alphabet[7][0]) && s.includes(alphabet[7][1]) && s.includes(alphabet[7][2])){
                    alphabet[3]=s
                    alphabet[s]=3
                    break
                }
                let x9 = 0
                let x4 = 0
                for (let j = 0; j < 5; j++) {
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
                    || !(s.includes(alphabet[7][0]) && s.includes(alphabet[7][1]) && s.includes(alphabet[7][2]))) {
                    alphabet[6]=s
                    alphabet[s]=6
                    break
                }
                if(s.includes(alphabet[4][0]) && s.includes(alphabet[4][1]) && s.includes(alphabet[4][2]) && s.includes(alphabet[4][3])){
                    alphabet[9]=s
                    alphabet[s]=9
                } else {
                    alphabet[0]=s
                    alphabet[s]=0
                }
                break
        }
    })
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