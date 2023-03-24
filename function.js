// Functions

var x = 10; 

function createfunction1() {
    var x = 20;
    return new Function('return x'); // this |x| refers global |x|
}

function createfunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createfunction1();
console.log(f1());
var f2 = createfunction2();
console.log(f2());


//Object - arguments ///////////

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3


    //different methods to convert arguments to array..
    var args1 = Array.prototype.slice.call(arguments);
    var args2 = [].slice.call(arguments);
    console.log(args1);
    console.log(args2);

    let args3 = Array.from(arguments);
    let args4 = [...arguments];
    console.log(args3);
    console.log(args4);

    
}

func1(1, 2, 3);


function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
            
        }
        
    }
    
    
    return longest;
}


