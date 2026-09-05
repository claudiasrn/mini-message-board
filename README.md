# Mini Message Board

A small Express + EJS app for posting and viewing messages.

## What it does

- View all posted messages on the index page (`/`)
- Add a new message via a form (`/new`)
- Click into any message to see its own detail page (`/message/:id`)

## Notes

- Built with Express and EJS as the view engine.
- Routes are organized in `routes/indexRouter.js` rather than directly in `app.js`.
- Messages are stored in memory (a plain array) — they reset whenever the server restarts, since there's no database yet.
- Form submissions are parsed with `express.urlencoded()` middleware.
- Each message is identified by its position (index) in the array, used to build the `/message/:id` detail route.