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


for(let i = 0; i < players.length; i++){
    currentPlayer = players[i]
    console.log(currentPlayer[0].name)
}