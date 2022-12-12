const hero = {
    "heroName" : "Spiderman",
    "realName": "Peter Parker",
    "address" : {
        "city" : "New York"
    }
}

const prop = 'heroName'
const {[prop] : aliasName} = hero


console.log(hero);
// console.log(hero['heroName'])
// console.log(hero.heroName);
console.log(aliasName);