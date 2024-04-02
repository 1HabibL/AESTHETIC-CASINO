/*ShuffledPokerDeck.js*/
const Cards =
[{name: "2 of Clubs", class: "Clubs", color: "Black", symbol:"2.C", value: 2, cardId: 1, twoclubsID: 1},
{name: "3 of Clubs", class: "Clubs", color: "Black", symbol:"3.C",  value: 3, cardId: 2, threeclubsID: 2},
{name: "4 of Clubs", class: "Clubs", color: "Black", symbol:"4.C",  value: 4, cardId: 3, fourclubsID: 3},
{name: "5 of Clubs", class: "Clubs", color: "Black", symbol:"5.C",  value: 5, cardId: 4, fiveclubsID: 4},
{name: "6 of Clubs", class: "Clubs", color: "Black", symbol:"6.C",  value: 6, cardId: 5, sixclubsID: 5},
{name: "7 of Clubs", class: "Clubs", color: "Black", symbol:"7.C",  value: 7, cardId: 6, sevenclubsID: 6},
{name: "8 of Clubs", class: "Clubs", color: "Black", symbol:"8.C",  value: 8, cardId: 7, eightclubsID: 7},
{name: "9 of Clubs", class: "Clubs", color: "Black", symbol:"9.C",  value: 9, cardId: 8, nineclubsID: 8},
{name: "10 of Clubs", class: "Clubs", color: "Black", symbol:"10.C",  value: 10, cardId: 9,tenclubsID: 9},
{name: "Jack of Clubs", class: "Clubs", color: "Black", symbol:"J.C",  value: 11, cardId: 10, jackclubsID: 10},
{name: "Queen of Clubs", class: "Clubs", color: "Black", symbol:"Q.C",  value: 12, cardId: 11, queenclubsID: 11},
{name: "King of Clubs", class: "Clubs", color: "Black", symbol:"K.C",  value: 13, cardId: 12, kingclubsID: 12},
{name: "Ace of Clubs", class: "Clubs", color: "Black", symbol:"A.C",  value: 14, cardId: 13, aceclubsID: 13},

{name: "2 of Spades", class: "Spades", color: "Black", symbol:"2.S", value: 2, cardId: 14, twospadesID: 14},
{name: "3 of Spades", class: "Spades", color: "Black",symbol:"3.S", value: 3, cardId: 15, threespadesID: 15},
{name: "4 of Spades", class: "Spades", color: "Black",symbol:"4.S", value: 4, cardId: 16, fourspadesID: 16},
{name: "5 of Spades", class: "Spades", color: "Black",symbol:"5.S", value: 5, cardId: 17, fivespadesID: 17},
{name: "6 of Spades", class: "Spades", color: "Black",symbol:"6.S", value: 6, cardId: 18, sixspadesID: 18},
{name: "7 of Spades", class: "Spades", color: "Black",symbol:"7.S", value: 7, cardId: 19, sevenspadesID: 19},
{name: "8 of Spades", class: "Spades", color: "Black",symbol:"8.S", value: 8, cardId: 20, eightspadesID: 20},
{name: "9 of Spades", class: "Spades", color: "Black",symbol:"9.S", value: 9, cardId: 21, ninespadesID: 21},
{name: "10 of Spades", class: "Spades", color: "Black",symbol:"10.S", value: 10, cardId: 22, tenspadesID: 22},
{name: "Jack of Spades", class: "Spades", color: "Black",symbol:"J.S", value: 11, cardId: 23, jackspadesID: 23},
{name: "Queen of Spades", class: "Spades", color: "Black",symbol:"Q.S", value: 12, cardId: 24, queenspadesID: 24},
{name: "King of Spades", class: "Spades", color: "Black",symbol:"K.S", value: 13, cardId: 25, kingspadesID: 25},
{name: "Ace of Spades", class: "Spades", color: "Black",symbol:"A.S", value: 14, cardId: 26, acespadesID: 26},

{name: "2 of Hearts", class: "Hearts", color: "Red", symbol:"2.H", value: 2, cardId: 27, twoheartsID: 27},
{name: "3 of Hearts", class: "Hearts", color: "Red", symbol:"3.H",  value: 3, cardId: 28, threeheartsID: 28},
{name: "4 of Hearts", class: "Hearts", color: "Red", symbol:"4.H",  value: 4, cardId: 29, fourheartsID: 29},
{name: "5 of Hearts", class: "Hearts", color: "Red", symbol:"5.H",  value: 5, cardId: 30, fiveheartsID: 30},
{name: "6 of Hearts", class: "Hearts", color: "Red", symbol:"6.H",  value: 6, cardId: 31, sixheartsID: 31},
{name: "7 of Hearts", class: "Hearts", color: "Red", symbol:"7.H",  value: 7, cardId: 32, sevenheartsID: 32},
{name: "8 of Hearts", class: "Hearts", color: "Red", symbol:"8.H",  value: 8, cardId: 33, eightheartsID: 33},
{name: "9 of Hearts", class: "Hearts", color: "Red", symbol:"9.H",  value: 9, cardId: 34, nineheartsID: 34},
{name: "10 of Hearts", class: "Hearts", color: "Red", symbol:"10.H",  value: 10, cardId: 35, tenheartsID: 35},
{name: "Jack of Hearts", class: "Hearts", color: "Red", symbol:"J.H",  value: 11, cardId: 36, jackheartsID: 36},
{name: "Queen of Hearts", class: "Hearts", color: "Red", symbol:"Q.H",  value: 12, cardId: 37, queenheartsID: 37},
{name: "King of Hearts", class: "Hearts", color: "Red", symbol:"K.H",  value: 13, cardId: 38, kingheartsID: 38},
{name: "Ace of Hearts", class: "Hearts", color: "Red", symbol:"A.H",  value: 14, cardId: 39, aceheartsID: 39},

{name: "2 of Diamond", class: "Diamond", color: "Red", symbol:"2.D",  value: 2, cardId: 40, twodiamondsID: 40},
{name: "3 of Diamond", class: "Diamond", color: "Red", symbol:"3.D",   value: 3, cardId: 41, threediamondsID: 41},
{name: "4 of Diamond", class: "Diamond", color: "Red", symbol:"4.D",   value: 4, cardId: 42, fourdiamondsID: 42},
{name: "5 of Diamond", class: "Diamond", color: "Red", symbol:"5.D",   value: 5, cardId: 43, fivediamondsID: 43},
{name: "6 of Diamond", class: "Diamond", color: "Red", symbol:"6.D",   value: 6, cardId: 44, sixdiamondsID: 44},
{name: "7 of Diamond", class: "Diamond", color: "Red", symbol:"7.D",   value: 7, cardId: 45, sevendiamondsID: 45},
{name: "8 of Diamond", class: "Diamond", color: "Red", symbol:"8.D",   value: 8, cardId: 46, eightdiamondsID: 46},
{name: "9 of Diamond", class: "Diamond", color: "Red", symbol:"9.D",   value: 9, cardId: 47, ninediamondsID: 47},
{name: "10 of Diamond", class: "Diamond", color: "BRed", symbol:"10.D",   value: 10, cardId: 48, tendiamondsID: 48},
{name: "Jack of Diamond", class: "Diamond", color: "Red", symbol: "J.D",   value: 11, cardId: 49, jackdiamondsID: 49},
{name: "Queen of Diamond", class: "Diamond", color: "Red", symbol:"Q.D",   value: 12, cardId: 50, queendiamondsID: 50},
{name: "King of Diamond", class: "Diamond", color: "Red", symbol:"K.D",   value: 13, cardId: 51, kingdiamondsID: 51},
{name: "Ace of Diamond", class: "Diamond", color: "Red", symbol:"A.D",   value: 14, cardId: 52, acediamondsID: 52},
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
    //console.log("here is the current shuffled deck" ,ShuffledDeck);
    //ShuffledDeck Export code
    module.exports = ShuffledDeck;

}

  

