var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
var position = friendAge.indexOf(90);
console.log(position);

var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
friendAge.push(33);
console.log(friendAge);

var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
friendAge.pop();
console.log(friendAge);

var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
friendAge.shift();
console.log(friendAge);

var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
friendAge.unshift(70);
console.log(friendAge);

var friendAge = [63, 45, 46, 78, 23, 43, 90, 43, 34];
var part = friendAge.slice(2, 4);
console.log(part);