// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('London', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise( function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City1 not found');
//     },1000);
//   });
// }
//
// getTempPromise('London').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge Area

function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number' ) {
      resolve(a + b);
  } else {
   reject('one of the arguments is not a number');
 }
});
}


addPromise(1,2).then(function (sum){
  console.log('successs',sum);
}, function (err) {
  console.log('error',err);
});

addPromise('butt', 3).then(function (sum) {
  console.log('no', sum);
}, function (err) {
  console.log('error', err);
});
// addPromise(7,6);
// addPromise(5,'f');
