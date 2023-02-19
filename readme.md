// Question one 
Arithmetic operators: include
1. Addition : +
2. Subtraction: -
3. Multiplication: *
4. Division: /
5. Modulus: %
6. Increment: ++
7. Decrement: --

Assignment Operators: Include
1. =
2. +=
3. -=
4. *=
5. /=
6. %=

Comparison operators: Include
1. Equals to : ==
2. Equal value and equal type : ===
3. Not equal : !=
4. Not equal value or not equal type: !==
5. Greater than: >
6. Less than : <
7. Greater than or equal to : >=
8. Less than or equal to : <=

Logical operators: Include
1. And : &&
2. Or : ||

Bitwise operators: 
1. Bitwise AND: &
2. Bitwise OR : |
3. Bitwise XOR : ^
4. Bitwise NOT: ~
5. Left shift: <<
6. Sign-propagating right shift: >>
7. Zero-fill right shift: >>>

//Question Two
Arithmetic operators
1. Addition: 
 i. let x = 5;
let y = 2;
console.log(x + y);
 ii. let a = 20;
let b = 6;
console.log(a + b);

2. Substraction: 
 i. let x = 5;
let y = 2;
console.log(x - y);
 ii. let a = 20;
let b = 6;
console.log(a - b);

3. Multiplication: *
 i. let x = 5;
let y = 2;
console.log(x * y);
 ii. let a = 20;
let b = 6;
console.log(a * b);

4. Division: /
 i. let x = 5;
let y = 2;
console.log(x / y);
 ii. let a = 20;
let b = 6;
console.log(a / b);

5. Modulus: %
 i. let x = 5;
let y = 2;
console.log(x % y);
 ii. let a = 20;
let b = 6;
console.log(a % b);

6. Increment: ++
 i. let x = 5;
console.log(x++);
 ii. let a = 20;
console.log(a++);

7. Decrement: --
 i. let x = 5;
console.log(x--); //4
 ii. let a = 20;
console.log(a--); //19

Assignment operators
1. =
 i. let x =10; 
 ii. let y = 5;

2. +=
 i. let x = 10;
 let y = 5;
 console.log(x += y); //x = 15; 
 ii.  let x = 20;
 let y = 10;
 console.log(x += y); //x = 30; 

3. -=
 i. let x = 10;
 let y = 5;
 console.log(x -= y); //x = 5; 
 ii.  let x = 20;
 let y = 10;
 console.log(x -= y); //x = 10; 

4. *=
 i. let x = 10;
 let y = 5;
 console.log(x *= y); //x = 50; 
 ii.  let x = 20;
 let y = 10;
 console.log(x *= y); //x = 200; 

5. /=
 i. let x = 10;
 let y = 5;
 console.log(x /= y); //x = 2; 
 ii.  let x = 20;
 let y = 10;
 console.log(x /= y); //x = 2; 

6. %=
 i. let x = 10;
 let y = 6;
 console.log(x %= y); //x = 4; 
 ii.  let x = 20;
 let y = 9;
 console.log(x %= y); //x = 2; 

Comparison operators: Include
1. Equals to : ==
 let x = 9;
 i.  console.log(x == 8); // false
 ii. console.log(x == "9"); // true

2. Equal value and equal type : ===
let x = 9;
 i.  console.log(x == 8); // false
 ii. console.log(x == "9"); // false

3. Not equal : !=
let x = 9;
 i.  console.log(x != 8); // true
 ii. console.log(x != 9); // false

4. Not equal value or not equal type: !==
let x = 9;
 i.  console.log(x !== 8); // true
 ii. console.log(x !== "9"); // true

5. Greater than: >
let x = 9;
 i.  console.log(x > 8); // true
 ii. console.log(x > 10); // false

6. Less than : <
let x = 9;
 i.  console.log(x < 8); // false
 ii. console.log(x < 10); // true

7. Greater than or equal to : >=
let x = 9;
 i.  console.log(x >= 10); // false
 ii. console.log(x >= 9); // true

8. Less than or equal to : <=
let x = 9;
 i.  console.log(x <= 8); // false
 ii. console.log(x <= 10); // true


Logical operators: Include
1. And : &&
let x = 10;
let y = 5;
 i. console.log(x < 12 && y > 1); //true
 ii. console.log(x > 10 && y > 1); //false

2. Or : ||
let x = 10;
let y = 5;
 i. console.log(x < 12 || y > 1); //true
 ii. console.log(x > 10 || y > 1); //true


Bitwise operators: 
1. Bitwise AND: &
 i. let a = 12; 
let  b = 25; 
result = a & b; 
console.log(result); // 8 
 ii. let a = 10; 
let  b = 3; 
result = a & b; 
console.log(result); // 2

2. Bitwise OR : |
 i. let a = 12; 
let  b = 25; 
result = a | b; 
console.log(result); // 29
 ii. let a = 10; 
let  b = 3; 
result = a | b; 
console.log(result); // 11

3. Bitwise XOR : ^
 i. let a = 12; 
let  b = 25; 
result = a ^ b; 
console.log(result); // 21
 ii. let a = 10; 
let  b = 5; 
result = a ^ b; 
console.log(result); // 15

4. Bitwise NOT: ~
 i. let  b = 12;
result = ~b;
console.log(result); // -13
 ii. let  b = 4;
result = ~b;
console.log(result); // -5

5. Left shift: <<
 i. let a = 8;
let  b = 1;
result = a << b;
// 1 ( 00000000000000000000000000010000 )
 ii. let a = 10;
let  b = 4;
result = a << b;
//160
 
6. Sign-propagating right shift: >>
let a = 8;
let b = 1;
// 11111111111111111111111111111101
let c = -3;
result = a >> b;
result1 = c >> b;
// 4 (00000000000000000000000000000100)
console.log(result); 
// -2 (11111111111111111111111111111110)
console.log(result1); 

7. Zero-fill right shift: >>>
let a = 8;
let b = 1;
let c = -3; 
result = a >>> b;
result1 = c >>> b;
// 4 (00000000000000000000000000000100)
console.log(result);
// 1073741823 (00111111111111111111111111111111)
console.log(result);



// Question Four
for (let i = 1; i < 20; i += 7) {
    console.log(i);
}
//Answer: 1, 8, 15;

