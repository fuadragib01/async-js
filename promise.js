// const status = false;

// console.log('Task 1');

// // promise definition
// const promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		if (status) {
// 			resolve('Task 2');
// 		} else {
// 			reject('Failed');
// 		}
// 	}, 2000);
// });

// // promise call
// promise
// 	.then(function(value) {
// 		console.log(value);
// 	})
// 	.catch(function(err) {
// 		console.log(err);
// 	});

// console.log('Task 3');



// Callback to promise
const paymentSuccess = true;
const marks = 70;

function enroll() {
	console.log('Course enrollment is in progress.');

	const promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (paymentSuccess) {
				resolve();
			} else {
				reject('Payment Failed!');
			}
		}, 2000)
	});

	return promise;
}

function progress() {
	console.log('Course on progress...');

	const promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			if (marks >= 80) {
				resolve();
			} else {
				reject("You couldn't get enough marks to get the certificate");
			}
		}, 3000);
	});

	return promise;
}

function getCertificate() {
	console.log('Preparing your certificate!');

	const promise = new Promise(function() {
		setTimeout(function(resolve) {
			resolve('Congrats! You got the certificate');
		}, 1000);
	});

	return promise;
}

enroll()
	.then(progress)
	.then(getCertificate)
	.then(function(val) {
		console.log(val)
	})
	.catch(function(err) {
		console.log(err);
	});