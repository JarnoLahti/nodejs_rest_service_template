import 'core-js/stable';
import 'regenerator-runtime/runtime'
import start from './start';

(async () =>  {
    try {
        await start();
    } catch (error) {
        process.exit(-1);
    }
})();