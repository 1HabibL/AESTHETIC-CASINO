let player1 = [{name: "alex"},{value : 2},{value:2}];
let player2 = [{name: "john"},{value : 2},{value : 4}];
let player3 = [{name: "greg"},{value : 6},{value : 6}];
let player4 = [{name: "felix"},{value: 7},{value : 7}];

let players = [player1, player2, player3, player4]
let currentWinner = [];
let communityCards = [{value: 13},{value:2},{value:8},{value:14},{value: 3}, {value: 8}];

let currentPlayer = '';//empty string for currentPlayer placeholder
let highestCommunityPair = [{value : 0}];
let highestHandPair = [{value : 0}]

//checks if their is a pair among community cards
for (let i = 0; i < communityCards.length; i++){
    for (let q = (i + 1); q < communityCards.length; q++){
        if(communityCards[i].value === communityCards[q].value){
           if(communityCards[q].value > highestCommunityPair[0].value){
            highestCommunityPair.splice(0, 1)
            highestCommunityPair.push(communityCards[q])
           }
            console.log("the community cards have a pair and it is",  communityCards[q].value)
        } 
    }   
}

for (let z = 0; z < players.length; z++){//iterate through palyers
    currentPlayer = players[z];
   // console.log(currentPlayer)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //checks if current players 1st paired is equal to current players second card
if(currentPlayer[1].value === currentPlayer[2].value){
//pushes highest hand pair to highest hand pair array
    if(currentPlayer[1].value > highestHandPair[0].value){
        highestHandPair.splice(0, 1)
        highestHandPair.push(currentPlayer[1])
       }

console.log(currentPlayer[0].name,"has pair in their hand they just need a pair with community cards");   
//checks if their is a pair among community cards
for (let i = 0; i < communityCards.length; i++){
    for (let q = (i + 1); q < communityCards.length; q++){
        if(communityCards[i].value === communityCards[q].value){
          
            if(communityCards[q].value > highestCommunityPair[0].value){
            highestCommunityPair.splice(0, 1)
            highestCommunityPair.push(communityCards[q])
           }
            //console.log("the community cards have a pair and it is",  communityCards[q].value)
            console.log("you both have value pair")

        } 
    }   
}
//PAIR IN HAND
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NO PAIR IN HAND

} else {//if there is no pair in hand
    console.log('no hand pair found for', currentPlayer[0].name)

//checks if community cards can pair with card 1  of the hand
for (let x = 0; x < communityCards.length; x++){//iterates through community cards
    if(currentPlayer[1].value === communityCards[x].value){//checks if community cards have and hands card 1 have same valua

        //pushes highest hand pair to highest hand pair array
    if(currentPlayer[1].value > highestHandPair[0].value){
        highestHandPair.splice(0, 1)
        highestHandPair.push(currentPlayer[1])
       }

console.log("you have 1 pair in your hand with card 1") 
console.log("but do you have  any other pairs?")

//////////////////////////////////////////////////////////////////////////////////////////////////////
//checks second card if there is pair with community cards or not AFTER CHECKING FIRST CARD

for (let c = 0; c < communityCards.length; c++){
    if(currentPlayer[2].value === communityCards[c].value){
     console.log("you have 1 pair in your hand with card 2")
     if(currentPlayer[2].value > highestHandPair[0].value){
        highestHandPair.splice(0, 1)
        highestHandPair.push(currentPlayer[2])
       }
     

        } else (console.log("you dont  have any other pairs"))
    }



/////////////////////////////////////////////////////////////////////////////////////////////////////

    }
}

//checks if community cards can pair with card 2  of the hand
for (let c = 0; c < communityCards.length; c++){
    if(currentPlayer[2].value === communityCards[c].value){
     console.log("you have 1 pair in your hand with card 2")   
     
     if(currentPlayer[2].value > highestHandPair[0].value){
        highestHandPair.splice(0, 1)
        highestHandPair.push(currentPlayer[2])
       }
//checks if their is a pair among community cards
     for (let v = 0; v < communityCards.length; v++){
        for (let b = (v + 1); b < communityCards.length; b++){
            if(communityCards[v].value === communityCards[b].value){
                console.log("the community cards have a pair and it is",  communityCards[v].value)
                console.log("you both have value pair")
            }
        }   
    }
     

        }
    }
  
}
}

//pair community card combination
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//win condition

console.log(highestHandPair, highestCommunityPair)