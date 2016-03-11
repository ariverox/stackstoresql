const config = {
  db: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'joe',
      password: 'lol',
      database: 'stackstoresql',
      charset: 'utf8'
    },
    debug: false
  },
  redis: {
    host:'',
    password: process.env.REDIS_PASS

  },
  JWT: {
    secret: 'BLAH',
    expires: '60d',
    issuer: 'me'
  }

}

export default config
