let player1 = [{name:"alex"},{value:2},{value:2}];
let player2 = [{name:"john"},{value : 2},{value : 4}];
let player3 = [{name:"greg"},{value: 14},{value: 3}];

let players = [player1, player2, player3]
let currentWinner = [];
let communityCards = [{value: 14},{value:2},{value:8},{value:7},{value: 3}];

let currentPlayer = ''
let highestValuePair = 0;
for (let q = 0; q < players.length;q++){
    currentPlayer = players[q];
   // console.log(currentPlayer)
    //checks if current players 1st caired is equal to current players second card
if(currentPlayer[1].value === currentPlayer[2].value){
console.log("you have pair in your hand")   
//if scanned pair number is the highest value so far it will be assigned to the highestvalue pair variable
if (currentPlayer[1].value >= highestValuePair){
    highestValuePair = currentPlayer[2].value
    currentWinner.push(players[q]);  
    console.log("the highest kicker pair combo so far is", highestValuePair)
    console.log("and the current winner so far is", currentPlayer)
}
}
//checks if current players cards can be paired with the community cards
for (let i = 1; i < currentPlayer.length; i++){ //scans the players  own cards
    //console.log(currentPlayer)
    for (let j = 0; j < communityCards.length; j++){//scans the community cards
        //console.log(communityCards)
    if(currentPlayer[i].value === communityCards[j].value){ //check if the current card in players hand matches wtih community cad
    //if the current card in players hand is equal to community cards it will display you have pair with community card
        //console.log(currentPlayer[i], "is equal too", communityCards[j], "so you have a pair")
    //if the pair value is higher than previous  highest then assign that one as the newest highest
        if (communityCards[j].value >= highestValuePair){
        highestValuePair = communityCards[j].value
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
    if(currentWinnerPlayer[1].value+currentWinnerPlayer[2].value > currentWinnerHand){
        currentWinnerHand = currentWinnerPlayer[1].value+currentWinnerPlayer[2].value
       
    }
    FinalPairWinner.push(currentWinnerPlayer)
}
console.log("the best pair hand is", currentWinnerPlayer)
}