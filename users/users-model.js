const db = require('../db/dbConfig.js');

function getAllUsers() {
	return db('users');
}

function deleteUser(id) {
	return db('users').where(id).del();
}

module.exports = {
	getAllUsers,
	deleteUser,
};
