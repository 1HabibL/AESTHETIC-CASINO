let player1 = [2,2];
let player2 = [2,4];
let player3 = [10,11];

let players = [player1, player2, player3]
let currentWinner = [];
let communityCards = [14,2,8,7,3];

let currentPlayer = ''
let highestValuePair = 0;
for (let q = 0; q < players.length;q++){
    currentPlayer = players[q];
    console.log(currentPlayer)
    //checks if current players 1st caired is equal to current players second card
if(currentPlayer[0] === currentPlayer[1]){
console.log("you have pair in your hand")   
//if scanned pair number is the highest value so far it will be assigned to the highestvalue pair variable
if (currentPlayer[0] >= highestValuePair){
    highestValuePair = currentPlayer[1]
    currentWinner.push(players[q]);  
    console.log("the highest kicker pair combo so far is", highestValuePair)
    console.log("and the current winner so far is", currentPlayer)
}
}
//checks if current players cards can be paired with the community cards
for (let i = 0; i < currentPlayer.length; i++){ //scans the players  own cards
    console.log(currentPlayer)
    for (let j = 0; j < communityCards.length; j++){//scans the community cards
        console.log(communityCards)
    if(currentPlayer[i] === communityCards[j]){ //check if the current card in players hand matches wtih community cad
    //if the current card in players hand is equal to community cards it will display you have pair with community card
        console.log(currentPlayer[i], "is equal too", communityCards[j], "so you have a pair")
    //if the pair value is higher than previous  highest then assign that one as the newest highest
        if (communityCards[j] >= highestValuePair){
        highestValuePair = communityCards[j]
        currentWinner.push(players[q]);  
        console.log("the highest kicker pair combo so far is", highestValuePair)
        console.log("and the current winner so far is", currentPlayer)
    }
 }
}
}
//tie breaker
FinalPairWinner = []
var currentWinnerHand = 0;
currentWinnerPlayer = '';
for(let w = 0; w < currentWinner.length; w++){
    currentWinnerPlayer = currentWinner[w];
    if(currentWinnerPlayer[0]+currentWinnerPlayer[1] > currentWinnerHand){
        currentWinnerHand = currentWinnerPlayer[0]+currentWinnerPlayer[1]
       
    }
    FinalPairWinner.push(currentWinnerPlayer)
}
console.log("the best pair hand is", currentWinnerPlayer)
}