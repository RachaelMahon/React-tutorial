var names = ['Rach', 'Andrew', 'Sib'];
//
// names.forEach(function(name){
//   console.log('for each', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Rach'));
//
// var person = {
//   name: 'Rachael',
//   greet: function () {
//       names.forEach((name) => {
//         console.log(this.name + ' says hi to ' + name)
//       });
//   }
// };
//
// person.greet();

function add (a, b) {
  return a + b;
}

function addStatement (a, b) {
  return (a + b);
}

var addAgain = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;



console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(1,3));
console.log(addStatement(9,0));
console.log(addExpression(1,3));
console.log(addExpression(9,0));
console.log(addAgain(2,5));
