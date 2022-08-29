# Bartender MVC
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


