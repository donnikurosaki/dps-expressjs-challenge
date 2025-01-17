import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve('./db/db.sqlite3'), {
	fileMustExist: true,
});

function query(
	sql: string,
	params?: { [key: string]: string | number | undefined },
) {
	return params ? db.prepare(sql).all(params) : db.prepare(sql).all();
}

function run(
	sql: string,
	params?: { [key: string]: string | number | undefined },
) {
	return params ? db.prepare(sql).run(params) : db.prepare(sql).run();
}

export default { query, run };
