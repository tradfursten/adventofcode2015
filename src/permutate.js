module.exports = function(array) {
	var retArr =  _permutate([], array, []);
	return retArr;
}


function _permutate(base, array, retarr) {
	if(array.length === 0) {
		retarr.push(base);
	} else {
		for(var i = 0; i < array.length; i++) {
			var newArr = base.slice(0);
			newArr.push(array[i]);
			_permutate(newArr, array.slice(0,i).concat(array.slice(i+1)), retarr);
		}
	}
	return retarr;
}
