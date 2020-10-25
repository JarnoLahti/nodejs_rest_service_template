import loggerBuilder from "../utils/logger";

function exampleService() {

    const _logger = loggerBuilder();

    const _examples = {
        0: {
            id: 0,
            name: "example_0",
            value: 0
        },
        1: {
            id: 1,
            name: "example_1",
            value: 1
        },
        2: {
            id: 2,
            name: "example_2",
            value: 2
        }
    }

    function getExampleById(id) {
        _logger.info(`Fetching example by id ${id}`);

        return _examples[id];
    }

    function createExample({id, name, value}) {
        if(_examples[id]){
            return null;
        }

        _examples[id] = {id, name, value};

        return getExampleById(id);
    }

    return Object.freeze({
        getExampleById,
        createExample
    })
}

export default exampleService;