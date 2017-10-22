var React = require('react');

var Denier = ({temp}) => {
  var denier = 110-(110/(1+(Math.exp(((Math.sqrt(temp[1])-temp[0])/(Math.PI*2))))));
  return denier;
};

module.exports = Denier
