let pl1 = [4, 7]
let pl2 = [3, 6];
let pl3 = [5, 8];
let winnersHandValue = [];
let plhands = [pl1, pl2, pl3];
var currentValue = 0;
for (let i = 0; i < plhands.length; i++) {
for(let k = 0; k < plhands[i].length; k++){
        console.log(plhands[i][k])
        if  (plhands[i][k] > currentValue) {
            currentValue = plhands[i][k]
            console.log("this is current highest value:", currentValue)
        } 
    }    
}
winnersHandValue.push(currentValue)
console.log("this is the value that the winners hand will have:", winnersHandValue[0]); 

for (let u = 0; u < plhands.length; u++) {
    if (plhands[u].includes(winnersHandValue[0])){
        console.log(plhands[u], "wins the game")   
    }
   
}




