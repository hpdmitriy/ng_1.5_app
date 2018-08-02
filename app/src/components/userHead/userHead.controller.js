const userData = require('data/userCard');

const controllerName = 'UserHeadController';
const controllerFunc = function () {
	this.user = {
		fullName: `${userData.name.first} ${userData.name.last}`,
		email: userData.email
	}
};

export {controllerName, controllerFunc}