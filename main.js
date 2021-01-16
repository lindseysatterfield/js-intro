// ***** FUNCTIONS WITHOUT ARGUMENTS *****
// function sayHello () {
// 	console.log('Hello');
// }

// const sayHello = function () {
// 	console.log('Hello');
// };

// const sayHello = () => {
// 	console.log('Hello');
// };

// sayHello();

// ***** FUNCTIONS WITH ARGUMENTS *****
// function logsHello (name) {
// 	console.log(`Hello, ${name}!`);
// }
// logsHello('Lindsey');

const addsTwoNumbers = (num1, num2) => {
	const sum = num1 + num2;
	console.log(sum);
	return sum;
};
console.log(addsTwoNumbers(5, 7));
