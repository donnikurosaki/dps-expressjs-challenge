import { Router } from 'express';
import {
	createProject,
	getProjects,
	updateProject,
	deleteProject,
	createReport,
	getReports,
	updateReport,
	deleteReport,
} from './controller';

const router = Router();

router.post('/projects', createProject);
router.get('/projects', getProjects);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.post('/reports', createReport);
router.get('/reports', getReports);
router.put('/reports/:id', updateReport);
router.delete('/reports/:id', deleteReport);

export default router;
