// 1 zadanie
for (i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(`FizBuz`);
    }
    else {
        if (i % 2 == 0)
    { console.log(`Fiz`); }
    
    else
    { console.log(`Buz`); }}
    
    
}


// 2 zadanie
let b = 7;
let factorial =1;
for (i=1; i<=b; i++)
{
 
    factorial *=i
    
    
 }
console.log(factorial);


// 3 zadanie
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
if ((consumptionPerWeek * weeksAmount) % sheetsInReamPaper === 0)
    console.log(consumptionPerWeek * weeksAmount / sheetsInReamPaper);
else { console.log((consumptionPerWeek * weeksAmount-((consumptionPerWeek * weeksAmount) % sheetsInReamPaper))/sheetsInReamPaper+1) }


// 4 zadanie
// const roomsOnFloor = 3;
// const floors = 9;
// function porch_floor (roomNumber){
//  return [porch = Math.ceil(roomNumber / (roomsOnFloor * floors)),
//         floor = Math.ceil((roomNumber % (roomsOnFloor * floors)) / roomsOnFloor)]
// }
// console.log(porch_floor(456));



const roomsOnFloor = 3;
const floors = 9;
let floor = 0;
let porch = 0;
function porch_floor(roomNumber) {
    
    if (roomNumber % (roomsOnFloor * floors) === 0) {
        porch = roomNumber / (roomsOnFloor * floors);
        
    }
    else {
        porch = (roomNumber - (roomNumber % (roomsOnFloor * floors))) / (roomsOnFloor * floors) + 1
    }
    if ((roomNumber % (roomsOnFloor * floors)) % roomsOnFloor === 0) {
        floor = (roomNumber % (roomsOnFloor * floors)) / roomsOnFloor
    }
    else {

        floor = ((roomNumber % (roomsOnFloor * floors)) - (roomNumber % (roomsOnFloor * floors)) % roomsOnFloor) / roomsOnFloor + 1
    }
    return [porch, floor]
}
console.log(porch_floor(457));





// 5 zadanie
let pyr = "";
let x = 8;
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x + x - 1; j++) {
            if(j <= x - i || j >= x + i) {
                pyr += "-";
            } else {
                pyr += "#";
            }
        }
        pyr+="\n"
}
console.log(pyr)