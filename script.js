//Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.


function calculateAverageAge(persons) {
    
  const sumAges = persons.reduce((sum , persons) => sum + persons.age,0)
  const avg = sumAges / persons.length
  return avg
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


///////let result = arrayNumeri.reduce((cur, acc)=>acc+cur,0)

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);