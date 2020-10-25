import { Router } from 'express';
import loggerBuilder from '../utils/logger';
import exampleService from './exampleService';

function exampleController() {
    const _logger = loggerBuilder();

    const _service = exampleService();

    const router = Router();

    router.get('/example/:id', async (req, res) => {
        const result = await _service.getExampleById(req.params.id);
        return res.status(200).json(result);
    });

    router.put('/example', async (req, res) => {
        _logger.info(JSON.stringify(req.body));

        const result = await _service.createExample({...req.body});

        return res.status(result ? 200:400).json(result);
    })

    return Object.freeze(router);
}

export default exampleController;