const restaurant = [
    { 
        id: "1",
        name: "KFC",
        location: "Chennai",
        rating: 4.2,
        cuisines: ["fast food", "south indian"], 
        costForTwo: 350,
    }, 
    {
        id: "2",
        name: "Burger King",
        location: "Madurai",
        rating: 3.5,
        cuisines: ["fast food", "north indian", "chinese"], 
        costForTwo: 250,
    },
    {
        id: "3",
        name: "Thalapakatti", 
        location: "Salem",
        rating: 4.5,
        cuisines: ["south indian"], 
        costForTwo: 300,
    }, 
    {
        id: "4",
        name: "Dominos",
        location: "Chennai",
        rating: 4.1,
        cuisines: ["south indian", "chinese", "fast food"], 
        costForTwo: 200,
    }, 
    {
        id: "5",
        name: "Subway",
        location: "Madurai",
        rating: 4.8,
        cuisines: ["north indian", "fast food"], 
        costForTwo: 300,
    }
]
console.log("Filter restaurants by rating");
console.log(restaurant.filter((ratings)=>ratings.rating>4));

console.log("Sort restaurants by cost low to high ");
console.log(restaurant.sort((a,b)=>{
 return a.costForTwo - b.costForTwo;
}));

console.log("Group restaurants by their location");
let set = new Set(restaurant.map(x=>x.location));
console.log(set);
let result = [];
set.forEach((a)=>{
    let tmpObj = {};
    tmpObj[a] = (restaurant.filter((b)=>(b.location == a)
    ));
    result.push(tmpObj);
});
console.log(result);




