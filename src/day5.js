
module.exports = {
	isNice : function(input) {
		return this.threeVowels(input) && this.isDubbleLetter(input) && !this.containsForbiddenString(input);

	},
	isDubbleLetter: function(input) {
		var len = input.length - 1;
		for(var i = 0; i < len; i++) {
			if(input[i] === input[i+1]) {
				return true;
			}
		}
		return false;
	},
	containsForbiddenString: function(input) {
		return input.match(/(ab)|(cd)|(pq)|(xy)/)?true: false;
	},
	threeVowels : function (input) {
		var match = input.match(/[aeiou]/g);
		return match? match.length >= 3: false;
	}
}
