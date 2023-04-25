#!/usr/bin/env node

import fastify from 'fastify';
const server = fastify();
let die = false;
const id = Math.floor(Math.random()*1000);

server.get('/', async () => ({ api: 'happy response', id }));

server.get('/health', async (_req, reply) => {
  if (die) {
    reply.code(503).send({ status: 'shutdown' });
  } else {
    reply.code(200).send({ status: 'ok' });
  }
});

server.get('/shutdown', async () => {
  die = true;
  return { shutdown: true };
});

const address = await server.listen(80, '0.0.0.0');
console.log(`listening on ${address}`);
