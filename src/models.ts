import Database from 'better-sqlite3';

const db = new Database('db/db.sqlite3');

export const run = (query: string, params: unknown[] = []) => {
	const stmt = db.prepare(query);
	return stmt.run(...params);
};

export const get = (query: string, params: unknown[] = []) => {
	const stmt = db.prepare(query);
	return stmt.get(...params);
};

export const all = (query: string, params: unknown[] = []) => {
	const stmt = db.prepare(query);
	return stmt.all(...params);
};
