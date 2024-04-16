
let communityCards = [{value: 14},{value:2},{value:8},{value:7},{value: 3}];
let array1 = [5,7,8,4,8,0,2]

if (communityCards.includes({value: 14})){
    console.log("it includes the number")
}


let handCards = [2,7]

let communitycards = [3,4,5,6,8,7,2]

for(let i = 0; i < handCards.length ;i++){
    for(let q = 0; q < communitycards.length ;q++){
    if(handCards[i] === communitycards[q]){
        console.log(handCards[i], communitycards[q])
    }
    }

}
    