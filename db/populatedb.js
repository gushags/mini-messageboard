#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR,
  dateadded TIMESTAMP WITH TIME ZONE default CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
  ('Bryan', 'This is the first message.');
`;

const SQL2 = `INSERT INTO messages (username, message)
VALUES
  ('Odin', 'The second message follows.')`;
const SQL3 = `INSERT INTO messages (username, message)
VALUES
  ('Damon', 'I refuse to be the third message.');`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString:
      'postgresql://messages_postgres_user:0oWUcpnAckTj5ejxDFpL7uU4QM6jb80Z@dpg-d2tmfm15pdvs739neth0-a.oregon-postgres.render.com/messages_postgres',
  });

  // Local is: 'postgresql://jeff@localhost:5432/top_users'

  await client.connect();
  await client.query(SQL);
  await client.query(SQL2);
  await client.query(SQL3);
  await client.end();
  console.log('done');
}

main();
