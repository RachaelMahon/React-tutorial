var React = require('react');
var Denier = require('Denier');

var WeatherMessage = ({temp, location}) => {
  var denier = Denier({temp});


  return (
  <div>
    <h3>It's {temp[0]} in {location}</h3>
    <h3> The windspeed is {temp[1]}</h3>
    <h3>And you should wear {denier} denier tights.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
