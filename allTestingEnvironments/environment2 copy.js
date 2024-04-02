let deckofCards = [
    {name : "2 of clubs", value : 2},
    {name : "3 of diamonds", value : 3},
    {name : "5 of spades", value : 5},
    {name : "8 of hearts", value : 8},
    {name : "jack of clubs", value : 11},
    {name : "ace of diamonds", value : 14},
]

for (let i = 0; i < deckofCards.length; i++){
    for (const key in deckofCards[i]) {
        if (deckofCards[i].cardValue > 10){
        console.log(`Name: ${deckofCards[i].name}, Value: ${deckofCards[i].cardValue}`)}
    }}
    


let player1 = [{playersName : "george"}, {name : "2 of clubs", value : 2}, {name : "jack of clubs", value : 11}]
let player2 = [{playersName : "greg"}, {name : "3 of diamonds", value : 3}, {name : "ace of diamonds", value : 14}];
let player3 = [{playersName : "gary"}, {name : "5 of spades", value : 5}, {name : "8 of hearts", value : 8}];
let winnersHandValue = [];
let plhands = [player1, player2, player3];
var currentValue = 0;
for (let i = 0; i < plhands.length; i++) {
    for (let k = 0; k < plhands[i].length; k++){
        console.log(plhands[i][k])
        if(plhands[i][k].value > currentValue){ 
            currentValue = plhands[i][k].value;
        }
    }
}
console.log("the highest value card is",  currentValue)

for (let j = 0; j < plhands.length; j++){
    for (let u = 0; u < plhands[j].length; u++){
        if(plhands[j][u].value === currentValue){
            winnersHand.push(plhands[j][0].playersName);
            console.log(winnersHand)
            console.log("The winner is", plhands[j][0].playersName)
        }
    }
   }
   
   

