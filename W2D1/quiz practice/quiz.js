var x = 1;
function foo() {
 console.log(x);
 var y = 2;
 function foo1() {
 var y = 3;
 if (!x) {
 z = 4;
 }
 var x = 5;
 console.log(x + y + z);
 }

 if(y==2){
 var x = 3;
 }
 //console.log(z);
 //foo1(); /* Comment this call and see the changes */
 console.log(x);
 console.log(y);
 console.log(z);
}
console.log(x);
//console.log(y);
//console.log(z);
foo(); /* Comment this call and see the changes */
console.log(x);
//console.log(y);
//console.log(z);