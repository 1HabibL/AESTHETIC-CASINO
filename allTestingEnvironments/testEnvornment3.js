let Cards = [
    {name : "2 of clubs", value : 2, logo: "2.C", cardId : 1},
    {name : "3 of diamonds", value : 3, logo: "3.D", cardId : 2},
    {name : "5 of spades", value : 5, logo: "5.S", cardId : 3},
    {name : "8 of hearts", value : 8, logo: "8.H", cardId : 4},
    {name : "jack of clubs", value : 11, logo: "J.C", cardId : 5},
    {name : "ace of diamonds", value : 14, logo: "A.D", cardId : 6},
]

const Ordereddeck = [];

for (let i = 0; i < Cards.length; i++){
    Ordereddeck.push(Cards[i]);
 
}
//shuffling algorithm
    if (Ordereddeck.length === Cards.length){
    function shuffle(array) {
        const shuffledArray = [...array];
    
        for (let k = shuffledArray.length - 1; k > 0; k--) {
            const j = Math.floor(Math.random() * (k + 1));
            [shuffledArray[k], shuffledArray[j]] = [shuffledArray[j], shuffledArray[k]];
        }

    return shuffledArray;
    }
    const ShuffledDeck = shuffle(Ordereddeck);
    console.log("here is the current shuffled deck" ,ShuffledDeck);
    //ShuffledDeck Export code
    module.exports = ShuffledDeck;
}

    //ShuffledDeck import code
const ShuffledDeck = require('./testEnvornment3.js')

let player1 = [{playerName : "Greg"}]
while (player1.length < 3)
{player1.push(ShuffledDeck[0])/*handig out  one card at a time */
ShuffledDeck.splice(0,1)/*the card went from the dealers deck to my hand*/
}
let player2 = [{playerName : "Ggeorge"}] 
while (player2.length < 3)
{player2.push(ShuffledDeck[0])
    ShuffledDeck.splice(0,1)
}
let player3 = [{playerName : "nancy"}]
while (player3.length < 3)
{player3.push(ShuffledDeck[0])
    ShuffledDeck.splice(0,1)
}



let plhands = [player1, player2, player3]; // player hands
console.log(plhands)



let winnersHand = [];
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
            winnersHand.push(plhands[j][0].playerName);
            console.log(winnersHand)
            console.log("The winner is", plhands[j][0].playerName)
        }
    }
   }

