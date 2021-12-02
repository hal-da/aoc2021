import {data1A, testData} from "./day1data.js";
console.log('hallo 1')
const measurements = data1A.trim().split('\n').map(Number)
//console.log(measurements)

let measureIncrementsA = 0;

for(let i = 0; i < measurements.length; i++){
    measureIncrementsA += (measurements[i] > measurements[i-1] )
}
console.log(measureIncrementsA)

let measureIncrementsB = 0;
for(let i = 0; i < measurements.length +20 ; i++){
    measureIncrementsB += (measurements[i]+measurements[i+1]+measurements[i+2] > measurements[i-1]+measurements[i]+measurements[i+1])
}
console.log(measureIncrementsB, 'B')
