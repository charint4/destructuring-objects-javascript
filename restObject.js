const hero = {
    "name" : "Spiderman",
    "realName": "Peter Parker",
    "address" : {
        "city" : "New York"
    }
}

const {name, ...restProperties} = hero;

console.log(name);
console.log(restProperties);
