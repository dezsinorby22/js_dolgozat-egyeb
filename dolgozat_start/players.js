players = [
  {
    "name": "John",
    "score": 9,
    "level": 6,
    "age": 20
  },
  {
    "name": "Stephan",
    "score": 10,
    "level": 2,
    "age": 20
  },
  {
    "name": "Todd",
    "score": 65,
    "level": 5,
    "age": 21
  },
  {
    "name": "Aliza",
    "score": 84,
    "level": 6,
    "age": 24
  },
  {
    "name": "John",
    "score": 93,
    "level": 7,
    "age": 19
  },
  {
    "name": "Mariela",
    "score": 34,
    "level": 5,
    "age": 32
  },
  {
    "name": "Eartha",
    "score": 53,
    "level": 5,
    "age": 22
  },
  {
    "name": "Tammara",
    "score": 87,
    "level": 4,
    "age": 21
  },
  {
    "name": "Ronny",
    "score": 49,
    "level": 7,
    "age": 20
  },
  {
    "name": "Frida",
    "score": 66,
    "level": 3,
    "age": 25
  },
]

let db=0;
let score=0;

for(let i = 0; i < players.length;i++)
{
  if (players[i].score >= 50)
    {
      db = db +1;
    }
}
console.log("We have "+db+" winners");


let max = 0;
let name = 0;
let score = 0;

for(let j = 0; j < players.length;j++)
    {
    if(players[j].score> max)
      {
        max = players[j].score;
        name=players[j].name;
      }
      
    }
console.log(name+"scored the best "+max);