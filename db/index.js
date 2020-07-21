import 'dotenv/config'
import models, { sequelize } from './models'
import logger from 'morgan'
import routes from './routes'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import {ERASE_DATABASE_ON_SYNC} from './config/configurations'
// import * as seedData from './seeders'

const port = 3001
const app = express()

if (process.env.NODE === 'development') {
  app.use(logger('dev'))
}

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.context = {
    models
  }
  next()
})

app.use('/transaction', routes.transactions)



sequelize.sync({ force: true }).then(async () => {
  // if (ERASE_DATABASE_ON_SYNC) {
     // seedData.createTransactions();
  // }
    app.listen(port, () => {
    console.log(`sub_crash listening on port ${port}!`)
  })
})

