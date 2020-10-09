// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/users";

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './data/users.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},

	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/testing/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/testing/migrations',
		},
		seeds: {
			directory: './data/testing/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: pgConnection,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
