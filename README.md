# Mini Message Board

A small Express + EJS app for posting and viewing messages, backed by a PostgreSQL database. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) Node.js curriculum.

## What it does

- View all posted messages on the index page (`/`)
- Add a new message via a form (`/new`), with server-side validation
- Click into any message to see its own detail page (`/message/:id`)
- Messages persist in a PostgreSQL database — no data loss on server restart

## Project structure

- `app.js` — app setup and middleware
- `routes/indexRouter.js` — route definitions
- `controllers/messagesController.js` — request handlers
- `db/pool.js` — PostgreSQL connection pool
- `db/queries.js` — database query functions
- `db/populatedb.js` — one-off script to create and seed the `messages` table
- `views/` — EJS templates

## Notes

- Built with Express and EJS as the view engine.
- Uses PostgreSQL via `pg`, hosted on [Neon](https://neon.tech).
- Form input is validated and sanitized server-side with `express-validator`; invalid submissions re-render the form with error messages and the user's original input preserved.
- Deployed on [Render](https://render.com).