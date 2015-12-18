module.exports = {
  part1: function(input) {
    const aunties = _parseInput(input); 
    return _getAntSue(aunties, _getConditionsPart1());

  },
  part2: function(input) {
    const aunties = _parseInput(input); 
    return _getAntSue(aunties, _getConditionsPart2());
  }


}

function _parseInput(input) {
  const parsedInput = input.trim()
  .split('\r\n')
  .map((value) => {

    const match = value.match(/Sue (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);

    const tempAunt = {number: match[1]};
    const item = {};
    item[match[2]] = Number(match[3]);
    item[match[4]] = Number(match[5]);
    item[match[6]] = Number(match[7]);
    tempAunt.items = item;
    return tempAunt;
  });
  return parsedInput;
}

function _getAntSue(aunties, conditions) {
  for(var i=0; i < aunties.length; i++) {
    if(_match(aunties[i], conditions)) {
      return aunties[i].number;
    }
  }
  }

  function _match(aunt, conditions) {
    for(var item of Object.keys(aunt.items)) {
      if(!conditions[item].match(conditions[item].value, aunt.items[item])) {
        return false;
      }
    }
    return true;
  }

  function _getConditionsPart1() {
    const conditons = {
      children: _createEq(3),
      cats: _createEq(7),
      samoyeds: _createEq(2),
      pomeranians: _createEq(3),
      akitas: _createEq(0),
      vizslas: _createEq(0),
      goldfish: _createEq(5),
      trees: _createEq(3),
      cars: _createEq(2),
      perfumes: _createEq(1)
    };
    return conditons;
  }

  function _getConditionsPart2() {
    const conditons = {
      children: _createEq(3),
      cats: _createGt(7),
      samoyeds: _createEq(2),
      pomeranians: _createLt(3),
      akitas: _createEq(0),
      vizslas: _createEq(0),
      goldfish: _createLt(5),
      trees: _createGt(3),
      cars: _createEq(2),
      perfumes: _createEq(1)
    };
    return conditons;
  }

function _createEq(value) {
  return { 
    value : value,
    match: function(value, otherValue) {
      return value === otherValue;
    }
  };
}

function _createLt(value) {
  return { 
    value : value,
    match: function(value, otherValue) {
      return value > otherValue;
    }
  };
}

function _createGt(value) {
  return { 
    value : value,
    match: function(value, otherValue) {
      return value < otherValue;
    }
  };
}
