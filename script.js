
/*
while (i < 3){
  console.log(i);
  i++;
}

while (i <= 16){
  console.log(i);
  i++;
}
let i = 5
for (; i <= 10; i--){
  console.log(i);
}
 */

//Exercise 1
document.write("<h3>Exercise 1a</h3>");

let i = 1;
while(i <= 50){
  document.write(i + "<br>");
  i++
}
document.write("<h3>Exercise 1b</h3>");
for (j = 35; j >= 8; j--){
  document.write( j +"<br>");
};

//Ex 2
document.write("<h3>Exercise 2</h3>");
let k = 89;
while (k >= 11){
  document.write( k + "<br>");
  k--
};
//Ex 3
document.write("<h3>Exercise 3" + "<br></h3>");
let sum = 0;
for(l = 0; l <= 100; l++){
  sum += l; 
}
document.write( sum+ "<br/>"  );

//Ex 4
document.write("<h3>Exercise 4</h3>");
let a = 5;
let sum2 = 0;
for (let n = 1; n <= a; n++){
   sum2 = 0;
  for (let o = 1; o <= n; o++){
    sum2 += o; 
  }
  document.write( "<br/>"  + sum2);
}
//Ex 5
document.write("<h3>Exercise 5</h3>");
 let p =7
while(p <= 56){
  p++
  if (p % 2 !== 0) continue;
  document.write( "<br/>"  + p);;
}

for (p = 8; p <= 56; p++){
  if (p % 2 !== 0) continue;
  document.write( "<br/>"  + p);;
}

//Ex 6
document.write("<h3>Exercise 6</h3>");
for (let q = 2; q <= 5; q++){
 document.write("2*" + q + " = " + q*2 +"<br>" );
}

for (let r = 1; r <= 5; r++){
document.write( "<br/>"  +"3*" + r + " = " + r*3);
 }

 //EXx 7
 
 document.write("<h3>Exercise 7</h3>");

 let number = 1000
     iteration = 1;
while (true) {
  document.write ('number is '+ number + "<br>");
  number /= 2;
  if(number < 50){
    break;
  }
  iteration ++;
}
document.write(number +' is less than 50' + "<br>");
document.write('Total iterations is '+ iteration + "<br>");

 //Ex 8
 document.write("<h3>Exercise 8</h3>");

 let total = parseInt("0");
     count = 0;
while(true){
 let number = prompt('Please enter a number'); 

  if(number == null || number <= 0){     
    break;
  }
 
  total = total + parseInt(number);
  count++;
}

let average = total/count;
document.write('average is '+ average); 
 
