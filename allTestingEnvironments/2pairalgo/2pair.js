let player1 = [{name:"alex"},{value:2},{value:2}];
let player2 = [{name:"john"},{value : 2},{value : 4}];
let player3 = [{name:"greg"},{value: 14},{value: 3}];

let players = [player1, player2, player3]
let currentWinner = [];
let communityCards = [{value: 14},{value:2},{value:8},{value:7},{value: 3}];

let currentPlayer = '';//empty string for currentPlayer placeholder
let highestCommunityPair = [];
let highestHandPair = []
for (let q = 0; q < players.length;q++){//iterate through palyers
    currentPlayer = players[q];
   // console.log(currentPlayer)
    //checks if current players 1st caired is equal to current players second card
if(currentPlayer[1].value === currentPlayer[2].value){
console.log("you have pair in your hand you just need")   
//checks if their is a pair among community cards
for (let i = 0; i < communityCards.length; i++){
    for (let q = (i + 1); q < communityCards.length; q++){
        if(communityCards[i].value === communityCards[q].value){
            console.log("the community cards have a pair and it is",  communityCards[i].value)
            console.log("you both have value pair")
        }
    }   
}
} else if (currentPlayer[1].value =! currentPlayer[2].value) {//if there is no pair in hand

for (let q = 0; q < communityCards.length; q++){
    if(currentPlayer[1].value === communityCards[q].value){
        
    }
}

}
}


//pair community card combination
