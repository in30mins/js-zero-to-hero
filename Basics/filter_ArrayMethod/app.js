// filter
// does return new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: "Emma Watson", age: 27, position: "The Leader" },
  { name: "Daniel", age: 28, position: "Hero" },
  { name: "Ron", age: 32, position: "Hero Friend" },
  { name: "Ron", age: 32, position: "Hero Friend" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 30;
});
console.log(youngPeople);

const newArray = people.filter(function (person) {
  return person.position === "Hero Friend";
});
console.log(newArray);

const simple = people.filter(function(s){
  return s.age <= 27;
})
console.log(simple)
console.log("1");

const simple1 = people.filter((p)=>{
  return p.position==="Hero";
})
console.log(simple1)
