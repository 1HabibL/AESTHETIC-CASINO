const ShuffledDeck = require('./ShuffledPokerDeck.js')

let npcplayerNames = [{playerName:"Greg"}, {playerName:"Alice"}, {playerName:"Lucas"}, {playerName:"Shauna"}, 
{playerName:"Flint"}, {playerName:"Mallow"}, {playerName:"Sohpecles"}, {playerName:"Lana"}
]

let player1 = [{playerName:"Lana"}] /* sitting in table with no cards*/
while (player1.length < 3)
{player1.push(ShuffledDeck[0])/*handiing out  one card at a time */
ShuffledDeck.splice(0,1)/*the card went from the dealers deck to my hand*/
}

let player2 = [{playerName:"Greg"}]
while (player2.length < 3)
{player2.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)
}

let player3 = [{playerName:"Alice"}]
while (player3.length < 3)
{player3.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)
}
let player4 = [{playerName:"Lucas"}]
while (player4.length < 3)
{player4.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)


}
let player5 = [{playerName:"Shauna"},]
while (player5.length < 3)
{player5.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)


}
let player6 = [{playerName:"Flint"}]
while (player6.length < 3)
{player6.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)


}
let player7 = [{playerName:"Mallow"}]
while (player7.length < 3)
{player7.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)
}
let player8 = [{playerName:"Sohpecles"}]
while (player8.length < 3)
{player8.push(ShuffledDeck[0])
ShuffledDeck.splice(0,1)
}

let communitycards = []
while (communitycards.length < 5){
    communitycards.push(ShuffledDeck[0])
    ShuffledDeck.splice(0,1)
    }

let playershands = [player1, player2, player3, player4, player5, player6, player7, player8];
console.log("these are the players hands:", playershands)
console.log("these are the community cards",communitycards)
/*
console.log(player1)
console.log(player2)
console.log(player3)
console.log(player4)
console.log(player5)
console.log(player6)
console.log(player7)
console.log(player8)
*/
module.exports = { playershands, communitycards };
