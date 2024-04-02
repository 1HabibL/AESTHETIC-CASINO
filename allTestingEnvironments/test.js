/*let objectArray = 
[{model: "toyota", year: 2007, hp: 179, vin: 2, make:"corolla"},
{model: "honda", year: 2003, hp: 220, vin: 7, make:"civic"},
{model: "kia", year: 2009, hp: 157, vin: 3,   make:"soul"},
]

//upload carvin 
let carVin = [];
let carinfo = []
for (let i = 0; i < objectArray.length; i++) {
    carVin.push(objectArray[i].vin);
}

let carVin = ["corolla", "soul"];
console.log(carVin)
let carinfo = []

for (let j=0 ; j<objectArray.length; j++){
   for(let k = 0; k <  carVin.length; k++){
    if(objectArray[j].make  === carVin[k]){
        carinfo.push(objectArray[j].model, objectArray[j].year);
    }
    }
}
console.log(carinfo)


*/

let player1 = [
    { name: "greg" },
    { name: "2 of clubs", value: 2 },
    { name: "3 of diamonds", value: 3 },
];

let player2 = [
    { name: "george" },
    { name: "5 of spades", value: 5 },
    { name: "8 of hearts", value: 8 },
];

let player3 = [
    { name: "adam" },
    { name: "jack of clubs", value: 11 },
    { name: "ace of diamonds", value: 14 },
];
let players = [player1, player2, player3]
let bestCurrentHand = [];
let currentPlayershand = ""

function displayCards(array) {
for (let i = 0; i < players.length; i++){
currentPlayershand = players[i]
bestCurrentHand.push(currentPlayershand[1], currentPlayershand[2]);
}
console.log(bestCurrentHand);
}

displayCards(players)




