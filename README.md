# Bartender MVC
This app was made with <3 using Svelte + TS and Express + TS. Sorry if there is any weird routing issues on the frontend.<br/>
There is only one router for a svelte SPA and it is a little questionable
## Setup
* App
  * ```npm run install```
  * create `.env.local` file
  * add `BASE_URL="http://localhost:8080"` to `.env.local`
  * `npm run dev`
  
* Server
  * add `.env` file
  * add `PORT=8080` to `.env`
  * add `BASE_URL="http://localhost:8080"` to `.env`
  * add `DATABASE_URL="file:./dev.db"` to `.env`
  * add `SECRET=<your secret>` to `.env`
  * `npm run install`
  * `npx prisma generate`
  * `npx tsc`
  * `npm run start`

## Testing the API
I wrote a few tests with jest and supertest to simplify testing some of the API endpoints like the auth.
The following assumes you have already completed setup. **Please use the tests I spent a lot of time on them** 😭
### Run the tests
* cd into server
* open terminal
* `npm run start`
* open another terminal
* `npm run test`




