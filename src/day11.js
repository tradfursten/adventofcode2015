module.exports = {

	getNextPassword: function(input) {
		var password = input;
		do {
			password = _incrementPassword(password);
		} while(!this.validatePassword(password));
		return password;
	},
	validatePassword: function(password) {
		return _containsSequence(password) && _doesNotContainsIllegalChar(password) && _containsTwoDuplicates(password);
	}
}

function _incrementPassword(password) {
	var p = password.split('');
	for(var i =  p.length-1; i >= 0; i--) {
		if(p[i] === 'z') {
			p[i] = 'a';
		} else {
			p[i] = String.fromCharCode(p[i].charCodeAt()+1);
			return p.join('');
		}
	}
}

function _containsTwoDuplicates(password) {
	return (password.match(/(.)\1/g) || []).length >= 2;
}

function _doesNotContainsIllegalChar(password) {
	return !password.match(/[ijo]/);	
}

function _containsSequence(password) {
	var lastCharCode = 0;
	var seq = 0;
	for(var i = 0; i < password.length; i++) {
		if(lastCharCode+1 === password.charCodeAt(i)) {
			seq++;
		} else {
			seq = 0;
		}
		if(seq === 2) {
			return true;
		}
		lastCharCode = password.charCodeAt(i);
	}
	return false;	
}
