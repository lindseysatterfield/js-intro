// function thisIsTrue (arg1, arg2) {
// 	if (arg1 !== 'nice' && arg2 !== 'Nice') {
// 		console.log(`You are ${arg1}`);
// 	}
// 	else {
// 		console.log(false);
// 	}
// }

// function thisIsTrue (arg1, arg2) {
// 	if (arg1.length < 3) {
// 		console.log(`You are ${arg1}`);
// 	}
// 	else if (arg2.length > 8) {
// 		console.log(`You are ${arg2}`);
// 	}
// 	else {
// 		console.log('you are NOTHING');
// 	}
// }

// thisIsTrue('ni', 'mickeymouse');

const canDrive = (age) => {
	if (age >= 15) {
		return true;
	}
	return false;
};
console.log(canDrive(13));
