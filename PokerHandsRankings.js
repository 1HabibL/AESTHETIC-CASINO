const { playershands, communitycards } = require('./PokerCardDistribution.js');
const { Cards, ShuffledDeck } = require('./ShuffledPokerDeck.js')
//Royal Flush : 1st [10.S] [J.S] [Q.S] [K.S] [A.S]  Highest card in order with same suit
//Straight Flush : 2nd [7.S] [8.S] [9.S] [10.S] [J.S] 5 Cards in order with same suit (not the highest ranked though)
//Four of a kind : 3rd [7.S] [7.C] [7.D] [7.H] [J.S] 4 cards with same value
//Full House : 4th [9.S] [9.C] [9.D] [6.H] [6.S] all cards are same suit
//Flush : 5th [9.S] [3.S] [5.S] [2.S] [A.S] 3 cards with same value paired with 2 cards with same value
//Straight : 6th [4.S] [5.C] [6.D] [7.H] [8.S]  5 consecutive cards with different suits
//Three of a kind: 7th  [4.S] [4.C] [4.D] [7.H] [8.S] 3 cards with the same value
//Two pair : 8th  [3.S] [3.C] [4.D] [4.H] [8.S] 2 Cards of same value paired wither another 2 cards with same value
//One pair : 9th [3.S] [3.C] [5.D] [4.H] [8.S] 2 cards with same value 
//High card : 10th [A.S] [K.H] [9.C] [8.D] [Q.C] Generally have high ranking cards like Ace King Queen 


/*Legacy
playershands = array of players hands 
community cars = array of objects that contain community cards
*/

//push all player cards into array 

/*Legacy
allCards = array all of players cards + Community cards
currentPlayershand = stores players
*/

let allCards = [];
let currentPlayershand = '';

function displayCards(array) {
for (let i = 0; i < playershands.length; i++){
currentPlayershand = playershands[i];
allCards.push(currentPlayershand[1], currentPlayershand[2]);
}

for (let q = 0; q < communitycards.length; q++){
    allCards.push(communitycards[q]);
    }

console.log("all cards:", allCards);
console.log("the length of best current hand is:", allCards.length);
}

displayCards(playershands)

//push all player cards in array

//High Card algorithm////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("these are the players hands:",playershands)

let winnersHand = [];
var currentHighestValue = 0;

//Checks if the player has a pair in their hand
for (let i = 0; i < playershands.length; i++) {
    for (let k = 0; k < playershands[i].length; k++){
        console.log(playershands[i][k])
        //replaces the current highest value of pair into currentHighesValue string
        if(playershands[i][k].value > currentHighestValue){ 
            currentHighestValue = playershands[i][k].value;
        }
    }
}

//Checks if the player has a pair combination with community card
console.log("the highest value card is",  currentHighestValue)
for (let j = 0; j < playershands.length; j++){
    for (let u = 0; u < playershands[j].length; u++){
        if(playershands[j][u].value === currentHighestValue){
            winnersHand.push(playershands[j][0].playerName);
            console.log(winnersHand)
            console.log("The winner is", playershands[j][0].playerName)
        }
    }
    
   }
   
//High Card algorithm

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Pair algorithm////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//alfgorithm to find pair
let currentPlayer = ''
let highestValuePair = 0;
for (let q = 0; q < playershands.length;q++){
    currentPlayer = playershands[q];
if(currentPlayer[1].value === currentPlayer[2].value){
console.log("you have pair in your hand")   
if (currentPlayer[1].value > highestValuePair){
    highestValuePair = currentPlayer[1].value
    console.log("the highest kicker is", highestValuePair)
}
}

for (let i = 0; i < currentPlayer.length; i++){
    for (let j = 0; j < communityCards.length; j++){
    if(currentPlayer[i].value === communityCards[j].value){
    console.log(currentPlayer[i], "is equal too", communityCards[j], "so you have a pair")
    if (communityCards[j].value > highestValuePair){
        highestValuePair = communityCards[j].value
        console.log("the highest kicker is", highestValuePair)
    }
 }
}
}
//tie breaker
}
//Pair algorithm