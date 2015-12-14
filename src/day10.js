function fa(input) {
var re = /(\d)\1*/g;
var temp = input;
for(var i = 0; i < 40; i++) {
temp = temp.match(re).map(function(v) {return v.length+v[0]}).join('');
}
return temp.length;
}

function fa(input) {
var re = /(\d)\1*/g;
var temp = input;
for(var i = 0; i < 50; i++) {
temp = temp.match(re).map(function(v) {return v.length+v[0]}).join('');
}
return temp.length;
}
