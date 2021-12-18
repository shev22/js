
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

 //Exc 8
 document.write("<h3>Exercise 8</h3>");

 let total = parseInt("0");
     count = 0;
while(true){
 let number = prompt('Ex 8', ''); 

  if(number == null || number <= 0){     
    break;
  }
 
  total = total + parseInt(number);
  count++;
}

let average = total/count;
document.write('average is '+ average); 
 
//Ex 9

let str = '10000 0 98 4 6 1 32';

arr = Array.from(str.split(' '),Number);

for (let i=0; i <= arr.length-1; i++) {
  // find the idnex of the smallest element
  let smallestIdx = i

  for (let j=i; j <= arr.length-1; j++) {
    if (arr[j] < arr[smallestIdx]) { 
      smallestIdx = j
    }
  }

  // if current iteration element isn't smallest swap it
  if (arr[i] > arr[smallestIdx]) {
    let temp = arr[i]
    arr[i] = arr[smallestIdx]
    arr[smallestIdx] = temp
    console.log(arr)
  }
 
}
console.log(arr[0], arr[arr.length-1])

//Ex 9
let numb = prompt('Ex 10', "");
    sumNumb = 0,                    //have a storage ready
    arr_numb = numb.split(""),      //split into individual characters
    numbLenght = arr_numb.length;
   
for(i=0; i<=numbLenght-1; i++){         //iterate through
  document.write((arr_numb [i] + " "));
  sumNumb += parseInt(numb[i],10);      //convert from string to int
};
document.write(numbLenght);
document.write(sumNumb);
  
