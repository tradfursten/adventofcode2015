const fs = require('fs');
const day12 = require('./src/day12.js');

const days = { day12 };

process.argv.forEach(function (val, index, array) {
   console.log(index + ': ' + val);
});

const day = process.argv[2];
const inputFile = process.argv[3];
fs.readFile(inputFile, 'utf8', function(err, input) {
	console.log(days[day].part1(input));
	console.log(days[day].part2(input));
});


