let testArray = [1, 2, 4, 5, 7, 8]
let communityArray = [10, 5, 13, 8, 11, 9]
let objArray = [ {name : "2 of clubs", value : 2, logo: "2.C", cardId : 1},
{name : "3 of diamonds", value : 3, logo: "3.D", cardId : 2},
{name : "5 of spades", value : 5, logo: "5.S", cardId : 3},
{name : "8 of hearts", value : 8, logo: "8.H", cardId : 4},
{name : "jack of clubs", value : 11, logo: "J.C", cardId : 5},
{name : "ace of diamonds", value : 14, logo: "A.D", cardId : 6},
]

let communityCards  = [ {name : "8 of diamonds", value : 8, logo: "8.D", cardId : 7},
{name : "9 of diamonds", value : 9, logo: "9.D", cardId : 8},
{name : "10 of clubs", value : 10, logo: "10.C", cardId : 9},
{name : "4 of spades", value : 4, logo: "4.S", cardId : 10},
{name : "queen of hearts", value : 12, logo: "Q.H", cardId : 11},
{name : "ace of hearts", value : 14, logo: "A.H", cardId : 12}]

let player1 = [{name: "greg"}, {name : "2 of clubs", value : 2, logo: "2.C", cardId : 1}, {name : "2 of clubs", value : 2, logo: "2.C", cardId : 1}]

let player2 = [{name: "greg"}, {name : "ace of clubs", value : 14, logo: "A.C", cardId : 14}, {name : "2 of clubs", value : 2, logo: "2.C", cardId : 1}]
let player3 = [{name: "greg"}, {name : "9 of diamonds", value : 9, logo: "9.D", cardId : 8}, {name : "jack of clubs", value : 11, logo: "J.C", cardId : 5}]
let  playerHand = [player1, player2,player3]
/*let filteredArray =  testArray.filter((number) => number === 7)

let filteredCards =  objArray.filter((number) => number.value === 8)
console.log(filteredCards)*/

//alfgorithm to find pair
let currentPlayer = ''
let highestValuePair = 0;
for (let q = 0; q < playerHand.length;q++){
    currentPlayer = playerHand[q];
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





