const express = require('express');
const router = express.Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
	Users.getAllUsers()
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Users.deleteUser({ id })
		.then((user) => {
			res.status(200).json({ message: `Deleted user ${id}  with success!` });
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

module.exports = router;
