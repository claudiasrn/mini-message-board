const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  "user" VARCHAR(255) NOT NULL,
  added TIMESTAMP NOT NULL
);

INSERT INTO messages ("user", text, added) VALUES
  ('Amando', 'Hi there!', NOW()),
  ('Charles', 'Hello World!', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();