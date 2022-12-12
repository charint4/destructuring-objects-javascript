const hero = {
    "name" : "Spiderman",
    "realName": "Peter Parker",
    "address" : {
        "city" : "New York"
    },
    "skillLevel" : {
        "fighting" : 1,
        "crawling" : 5
    }
}

const {address: {city}, skillLevel: {crawling}}  = hero;
// const city = hero.address.city;
// const crawling = hero.skillLevel.crawling;

console.log(hero);
console.log(city);
console.log(crawling)
