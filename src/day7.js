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
		return _compute(operations, node);
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
	var input0 = operations[node].input0;
	var input1 = operations[node].input1;
	switch(operations[node].op) {
		case 'NOT':
			operations[node].value = _getValue(operations, input0) ^ 65535;
			break;
		case 'OR':
			operations[node].value = _getValue(operations, input1) | _getValue(operations, input0);
			break;
		case 'AND':
			operations[node].value = _getValue(operations, input1) & _getValue(operations, input0);
			break;
		case 'LSHIFT':
			operations[node].value = _getValue(operations, input1) <<  _getValue(operations, input0);
			break;
		case 'RSHIFT':
			operations[node].value = _getValue(operations, input1) >>  _getValue(operations, input0);
			break;
		default:
			operations[node].value = _getValue(operations, input0);
			break;
	}
	return operations[node].value;
}

function _getValue(operations, n) {
	if(isNaN(+n)) {
		if(operations[n].value) {
			return operations[n].value;
		} else {
			return _compute(operations, n);
		}
	} else {
		return  +n;
	}
};

