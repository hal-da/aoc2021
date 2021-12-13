console.log('day13')
import {theData} from "./day13data.js";
let print = theData.realData.print.split('\n').map(y=> y.split(',').map(Number))
let fold = theData.realData.fold.split('\n').map(x => x.split(' ').pop().split('='))
console.log(fold)
let y = 0, x = 0, sheet = []
createSheet()
fold.forEach(f=> {
    if(f[0]==='x')foldVertical(f[1])
    else foldHorizontal(f[1])
})
console.log(sheet)
// foldHorizontal(7)
// foldVertical(655)
countRauten()

function createSheet(){
    print.forEach(dot=> {
        if(dot[0] > y) y = dot[0]
        if(dot[1] > x) x = dot[1]
        // sheet[dot[0]][dot[1]] = '#'
    })
    for (let i = 0; i <= x; i++) {
        sheet[i] = []
        for (let j = 0; j <= y; j++) {
            sheet[i][j]=' '
        }
    }
    print.forEach(dot => {

        sheet[dot[1]][dot[0]] = '#'

    })

}
function foldHorizontal(y){
    for (let i = y; i < sheet.length; i++) {
        for (let j = 0; j < sheet[0].length; j++) {
            if(i===y)sheet[y][j] = '-'
            if(sheet[i][j]==='#'){
                let mirrorI = y-(i-y)
                sheet[mirrorI][j] = '#'
            }
            sheet[i][j] = ''
        }
    }
}
function foldVertical(x){
    for (let i = 0; i < sheet.length; i++) {
        for (let j = x; j < sheet[0].length; j++) {
            if(i===y)sheet[y][j] = '|'
            if(sheet[i][j]==='#'){
                let mirrorJ = x-(j-x)
                sheet[i][mirrorJ] = '#'
            }
            sheet[i][j] = ''
        }
    }
}
function countRauten(){
    let count = 0
    sheet.forEach(row=>{
        row.forEach(cell => {
            if(cell==='#')count++
        })
    })
    console.log(count)
}
