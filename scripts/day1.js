import {data1A, testData} from "./day1data.js";
console.log('hallo')
const measurements = data1A.trim().split('\n').map(Number)
//console.log(measurements)

let measureIncrementsA = 0;

for(let i = 0; i < measurements.length; i++){
    if(measurements[i] > measurements[i-1] ) {
        measureIncrementsA++
    }
}
console.log(measureIncrementsA)

let measureIncrementsB = 0;
for(let i = 0; i < measurements.length; i++){
    if(measurements[i]+measurements[i+1]+measurements[i+2] > measurements[i-1]+measurements[i]+measurements[i+1] ) {
        measureIncrementsB++
    }
}
console.log(measureIncrementsB, 'B')
