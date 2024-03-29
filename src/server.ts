import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
// import { errorLogger, logger } from './share/logger'
process.on('uncaughtException', error => {
  // errorLogger.error(error)
  console.log(error)
  process.exit(1)
})
let server: Server
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    // logger.info(`Database is connected successfully 🛢   `)

    app.listen(config.port, () => {
      // logger.info(`Application  listening on port ${config.port}`)
      console.log(`Application  listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
    // errorLogger.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error)
        // errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

boostrap()

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
