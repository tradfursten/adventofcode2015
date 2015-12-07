exports.howManyLights = function(input) {
  var lights = {};
  for(var i = 0; i < input.length; i++) {
    if(input[i].match(/turn on/)) {
      fixTheLights(lights, input[i], _turnOnLights);
    } else if(input[i].match(/turn off/)) {
      fixTheLights(lights, input[i], _turnOffLights);
    } else if(input[i].match(/toggle/)) {
      fixTheLights(lights, input[i], _toggleLights);
    }
  }
  return Object.getOwnPropertyNames(lights).length;
};

function fixTheLights(lights, commando, f) {
  var match = commando.match(/(\d+),(\d+)/g);
  var startMatcher = match[0].split(','); 
  var endMatcher = match[1].split(','); 
  var start = {x:parseInt(startMatcher[0]), y:parseInt(startMatcher[1])};
  var end = {x:parseInt(endMatcher[0]), y:parseInt(endMatcher[1])};
  
  for(var x = start.x; x <= end.x; x++) {
    for(var y = start.y; y <= end.y; y++) {
      f(lights, x+':'+y);
    }
  }
}

function _turnOffLights(lights, key) {
  delete lights[key];
}

function _turnOnLights(lights, key) {
  lights[key] = 1; 
}

function _toggleLights(lights, key) {
  if(lights[key] === 1) {
    _turnOffLights(lights, key);
  } else {
    _turnOnLights(lights, key);
  }
}
