import { Request, Response } from 'express';
import { run, all } from './models';

// Projects Controllers
export const createProject = (req: Request, res: Response) => {
	const { name, description } = req.body;
	const result = run(
		'INSERT INTO projects (name, description) VALUES (?, ?)',
		[name, description],
	);
	res.status(201).json({ id: result.lastInsertRowid, name, description });
};

export const getProjects = (req: Request, res: Response) => {
	const projects = all('SELECT * FROM projects');
	res.status(200).json(projects);
};

export const updateProject = (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, description } = req.body;
	run('UPDATE projects SET name = ?, description = ? WHERE id = ?', [
		name,
		description,
		id,
	]);
	res.status(200).json({ id, name, description });
};

export const deleteProject = (req: Request, res: Response) => {
	const { id } = req.params;
	run('DELETE FROM projects WHERE id = ?', [id]);
	res.status(200).json({ id });
};

// Reports Controllers
export const createReport = (req: Request, res: Response) => {
	const { projectId, content } = req.body;
	const result = run(
		'INSERT INTO reports (project_id, content) VALUES (?, ?)',
		[projectId, content],
	);
	res.status(201).json({ id: result.lastInsertRowid, projectId, content });
};

export const getReports = (req: Request, res: Response) => {
	const reports = all('SELECT * FROM reports');
	res.status(200).json(reports);
};

export const updateReport = (req: Request, res: Response) => {
	const { id } = req.params;
	const { projectId, content } = req.body;
	run('UPDATE reports SET project_id = ?, content = ? WHERE id = ?', [
		projectId,
		content,
		id,
	]);
	res.status(200).json({ id, projectId, content });
};

export const deleteReport = (req: Request, res: Response) => {
	const { id } = req.params;
	run('DELETE FROM reports WHERE id = ?', [id]);
	res.status(200).json({ id });
};
