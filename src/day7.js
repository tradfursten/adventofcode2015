module.exports = {

	parseInput: function(input) {
		var operations = {};
		var re = /(\w+)/g;
		var parsedInput;
		var matcher;
		for(var i = 0; i < input.length; i++) {
			matcher = input[i].match(re).reverse();
			var op = _getOperation(matcher);
			operations[op.symbol] = op;
		}
		return operations;
	},
	getValue: function(operations, node) {
		_compute(operations, node);
		return operations[node].value;
	}

};

function _getOperation(op) {
	var operation = {};
	operation.symbol = op[0];
	operation.input0 = op[1];
	operation.op = op[2];
	operation.input1 = op[3];
	return operation;
};

function _compute(operations, node) {
	switch(operations[node].op) {
		case 'NOT':
			console.log(_getValue(operations, node));
			console.log(~_getValue(operations, node));
			operations[node].value = ~ _getValue(operations, node);
			break;
		default:
			operations[node].value = _getValue(operations, node);
			break;
	}
	return operations[node].value;
}

function _getValue(operations, node) {
	var input0 = operations[node].input0;
	if(isNaN(+input0)) {
		return _compute(operations, input0);
	} else {
		return  +operations[node].input0;
	}
	
};

