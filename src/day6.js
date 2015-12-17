module.exports = {
    howManyLights: function(input) {
      var lights = parseInput(input, {on: _turnOnLights, off: _turnOffLights, toggle: _toggleLights});
      return Object.getOwnPropertyNames(lights).length;
    },
    howBright: function(input) {
      var lights = parseInput(input, {on: _turnOnLights, off:_decreasLights, toggle: _increaseBrightness});
      return Object.keys(lights).reduce((previous, key) => {
        return previous + lights[key];
      }, 0);
    }

  };

  function parseInput(input, functions) {
    var lights = {};
    for(var i = 0; i < input.length; i++) {
      if(input[i].match(/turn on/)) {
        fixTheLights(lights, input[i], functions.on);
      } else if(input[i].match(/turn off/)) {
        fixTheLights(lights, input[i], functions.off);
      } else if(input[i].match(/toggle/)) {
        fixTheLights(lights, input[i], functions.toggle);
      }
    }
    return lights;
  }

  function fixTheLights(lights, commando, f) {
    var match = commando.match(/(\d+),(\d+).*?(\d+),(\d+)/).map(Number);
    var start = {x:match[1], y:match[2]};
    var end = {x:match[3], y:match[4]};

    for(var x = start.x; x <= end.x; x++) {
      for(var y = start.y; y <= end.y; y++) {
        f(lights, x+':'+y);
      }
    }
    }

    function _turnOffLights(lights, key) {
        delete lights[key];
    }

    function _decreasLights(lights, key) {
      lights[key] = lights[key] -1 || 0;
      if(lights[key] === 0) {
        delete lights[key];
      }
    }
    function _turnOnLights(lights, key) {
      lights[key] = lights[key] +1 || 1; 
    }
    
    function _increaseBrightness(lights, key) {
      lights[key] = lights[key] + 2 || 2; 
    }


    function _toggleLights(lights, key) {
      if(lights[key] > 0) {
        _turnOffLights(lights, key);
      } else {
        _turnOnLights(lights, key);
      }
    }
