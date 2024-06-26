const request = require('supertest');
const app = require('../app');
const { tasks } = require('../models/taskModel');

beforeEach(() => {
    tasks.length = 0;  // Clear the task list before each test
});

describe('Task Controller', () => {
    it('should create a task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({ title: 'Test Task' });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe('Test Task');
    });

    it('should get a task by id', async () => {
        const resCreate = await request(app)
            .post('/tasks')
            .send({ title: 'Get Task' });
        const taskId = resCreate.body.id;

        const resGet = await request(app).get(`/tasks/${taskId}`);
        expect(resGet.statusCode).toBe(200);
        expect(resGet.body.title).toBe('Get Task');
    });

    it('should get all tasks', async () => {
        await request(app).post('/tasks').send({ title: 'Task 1' });
        await request(app).post('/tasks').send({ title: 'Task 2' });

        const res = await request(app).get('/tasks');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
    });

    it('should delete a task by id', async () => {
        const resCreate = await request(app)
            .post('/tasks')
            .send({ title: 'Delete Task' });
        const taskId = resCreate.body.id;

        const resDelete = await request(app).delete(`/tasks/${taskId}`);
        expect(resDelete.statusCode).toBe(204);

        const resGet = await request(app).get(`/tasks/${taskId}`);
        expect(resGet.statusCode).toBe(404);
    });
});
