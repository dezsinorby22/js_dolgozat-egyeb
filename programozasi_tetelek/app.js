console.log("hello wrld");
console.log("---------------------------")

let a = 3;
let b = 4;
let c;

console.log("a =",a,"b=",b,"c=",c);
c=a;
console.log("csere után: c=",c);
a=b;
console.log("csere után: a=",a);
b=c;
console.log("csere után: b=",b);
console.log("a =",a,"b=",b,"c=",c);
console.log("---------------------------")
//-----------------------------------//

// 1.szorozatszamitas tetele

let x =[5,7,2,9,5,4];
let osszeg=0;

for(let i = 0; i < x.length; i++)
  {
  osszeg=osszeg +x[i]*1;
  }

console.log("Az X táblának elemei:",x);
console.log("Az X táblának elemeinek összege:",osszeg);
console.log("---------------------------")

// 2. eldontes

console.log("az osszeg erteke:"+osszeg);
  var i = 0;
  while ( i < x.length && x[i] !== 2) {
    i = i+1;
  }
  
if (i < x.length) {
  let van = true;
  console.log("van benne 2-es");
  }

console.log("az osszeg erteke:"+osszeg);
  var i = 0;
  while ( i < x.length && x[i] !== 2) {
    i = i+1;
  }

//3. Linearis kereses

let van;
let szorsz;

if (i < x.length) {
  van = true;
  console.log("van benne 2-es");
  }



if (van)
{
 sorsz = i;
 console.log("sorszám: "+sorsz);
}

//4. Megszamlalas

let db=0;

for(let i=0;i<x.length; i++)
  {
    if (x[i]%2 === 0)
      {
        db = db +1;
       
      }
  }
 console.log("páros számok: "+db);


//5.Maximumkivalasztas

let max =0;

for(let i = 1;i<x.length; i++)
  {
    if (x[i] > x[max])
      {
        max = i;
      }
  }
console.log("legnagyobb elem: "+x[max]);


//6. buborekrendezes
// let x = [5, 7, 2, 9, 5, 4];


for( i = x.length; i > 1; i--)
  {
    for(let j =0; j < i-1; j++)
      {
        if(x[j] > x [j + 1])
          {
          c = x[j];
          x[j] = x [j + 1]
          x [j + 1] = c;
          
          }
      }
  }

console.log(x);


// 7. Minimum kiválasztásos rendezés


x = [5, 7, 2, 9, 3];

console.log("a tömb rendezelenül: "+x);
for (let i = 0; i<( x.length-1 ); i++){
  let min = i;
  for (j = (i+1); j<x.length; j++){
    if( x[min] > x[j])
    {
      min = j;
    }
  }
  c = x[i];
  x[i] = x[min];
  x[min] = c;
}
console.log("a tömb rendezetten: "+x);


// 8. faktoriális

function fakt(N)
{
  if(N === 0)
    {
      return 1;
    }else{
      return(N*fakt(N-1));
    }

}
console.log(fakt(4));