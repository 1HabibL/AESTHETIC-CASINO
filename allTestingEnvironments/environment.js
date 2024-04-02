let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
let class1 = [{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
{firstName:"greg", lastName:"abott", age:61, eyeColor:"red"},
{firstName:"tyler", lastName:"lopez", age:66, eyeColor:"green"},]

let classage = [61, 66, 50]
let classFirstnames = class1.map(person => person.firstName)
console.log(classFirstnames)

for (let i = 0; i < classage.length; i++){
    console.log(classage[i])
}

//expectedOutput = [greg, tyler, john]