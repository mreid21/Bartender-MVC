import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { cocktailRoute } from './routes/cocktails'
import { usersRoute } from './routes/users'
config({path: '../.env'})

const app = express()
app.use(cors({
  credentials: true,
  origin: '*'
}))

app.use(express.json())
app.use('/cocktails', cocktailRoute)
app.use('/users', usersRoute)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})


