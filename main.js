//1
let str1=10;
for (let i = 11; i <=20; i++) {
    str1=str1 + ', ' + i;
}
console.log(str1)

//2
for (let i = 10; i <=20; i++) {
console.log(`sqrt ${i}=  ${i*i}`)
}
//3
let numToMult=7;
for(i = 0; i <=10; i++){
    console.log(`multiplication of 7*${i} = ${numToMult * i}`)
}

//4
let sumOfNum=0;
for(i = 0; i <=15; i++){
    sumOfNum = sumOfNum +i
}
console.log(`sum of Numbers 1 to 15 = ${sumOfNum}`)

//5
let sqr2=15;
for(i = 16; i <=35; i++){
    sqr2 = sqr2 * i ; 
}
console.log(sqr2)

//6
let avarage = 0;
for(i = 1; i <=500; i++){
    avarage=avarage + i
}
console.log(`avarage from 1 to 500 is ${avarage/500}`)

//7

let sumOfDoubleNum =0;
for(i = 30; i <=80; i=i+2){
    sumOfDoubleNum = sumOfDoubleNum +i
}
console.log(`sum Of Double Numbers from 30 to 80 is ${sumOfDoubleNum}`)

//8
let multipliesOfThree=102;
for (let i = 105; i <=200; i=i+3) {
    multipliesOfThree=multipliesOfThree + ', ' + i;
}
console.log(multipliesOfThree)

//9
let n=154;
let divisor= 0;
let sumOfDivisior=0;
let numberOfDivisor=0;

for(i=1;i<=n;i++)
    if (n % i === 0){
        divisor=divisor + ', ' + i;
        
    }
console.log(`divisor of 154 is ${divisor}`)

//10
for(i=1;i<=n;i++)
if(n % i === 0 && i % 2===0){
    numberOfDivisor++
}
console.log(`numberOfDivisor is ${numberOfDivisor}`)

//11
for(i=1;i<=n;i++)
if(n % i === 0 && i % 2===0){
    sumOfDivisior=sumOfDivisior+i
}
console.log(`sumOfDivisior is ${sumOfDivisior}`)

//12

let Table=''
for (let i = 1; i < 11; i++) {
		for (let j = 1; j < 11; j++) {
			Table  += (j*i);
                console.log(i*j)  
		}
}
