import { createServer } from './app/server';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

createServer().then(server => {
  server.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}/graphql`);
  });
});
