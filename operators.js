// ARITHMATIC OPERATORS

+ //Addition: 6 + 9
- //Subtraction: 6 - 3
* //Multiplication: 6 * 9
/ //Division: 6 / 3
% //Remainder (modulo).  Returns the remainder left 
  // over after you've divided the left number into 
  // a number of integer portions equal to the right number.
8 % 3 //(returns 2, as three goes into 8 twice, leaving 2 left over). 

** //Exponent. Raises a base number to the exponent power, 
   //that is, the base number multiplied by itself, 
   //exponent times. 
5 ** 2 //(returns 25, which is the same as 5 * 5). 

//-------------------------------------------------------------------------------------------

 // ASSIGNMENT OPERATORS - assign a value to a variable.

 += // Addition assignment: Adds the value on the right to the variable value on the left, 
                          //then returns the new variable value;
x += 2;
x = x + 2;

 -= // Subtraction assignment: Subtracts the value on the right from the variable value on the left, 
                              //and returns the new variable value;
x -= 3;
x = x - 3;

 *= // Multiplication assignment: Multiplies the variable value on the left by the value on the right, 
                                //and returns the new variable value; 
x *= 4;
x = x * 4;

/= // Division assignment: Divides the variable value on the left by the value on the right, 
                         //and returns the new variable value;
x /= 5;
x = x / 5;

//-------------------------------------------------------------------------------------------

//COMPARISON OPERATORS - run true/false tests

=== //Strict equality: Tests whether the left and right values are identical to one another;
5 === 2 + 4; // false

!== //Strict-non-equality: Tests whether the left and right values are not identical to one another;
5 !== 2 + 3; // false

< //Less than: Tests whether the left value is smaller than the right one;
10 < 6; // false

> //Greater than:Tests whether the left value is greater than the right one; 
10 > 20; // false

<= //Less than or equal to: Tests whether the left value is smaller than or equal to the right one;
3 <= 2; // false

>= // Greater than or equal to: Tests whether the left value is greater than or equal to the right one;
5 >= 4; // true


//Logical operators: AND, OR and NOT

&& // AND; allows chaining together of two or more expressions - 
// All expressions must be individually evaluated to true inorder for the whole expression to be true

|| // OR; allows chaining together of two or more expressions - 
// Atleast one of the expressions must be individually evaluated as true for the whole expression to return true

! // NOT; Used to negate an expression