import serverBuilder from './server';

async function start(){
    
    const server = serverBuilder();

    await server.start();

    async function gracefulExit(){
        await server.stop();
        process.exit(0);
    }

    process.on('SIGTERM', async () => { await gracefulExit(); });
    process.on('SIGINT', async () => { await gracefulExit(); });
}

export default start;