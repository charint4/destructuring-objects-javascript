const hero = {
    name : "Spiderman",
    realName: "Peter Parker",
    address : {
        city : "New York"
    }
}

const {name} = hero;

console.log("Bind property value to a variable")
console.log(name+"\n");

const heroes = [
    {
        name : "Spiderman",
        realName : "Peter Parker"
    },
    {
        name : "Ironman",
        realName : "Tony Stark"
    }
]

console.log("Combination with loops");
for(const {name} of heroes) {
    console.log(name);
}

console.log("\n")


console.log("Function Parameter Destructuring ")
const names = heroes.map( ({name}) => name)

console.log(names);

