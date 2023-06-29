export const Environment = false

export const Config = {
  API_URL: Environment ? process.env.API_URL : process.env.DEV_API_URL ,
  SENTRY_TOKEN: process.env.SENTRY_TOKEN,
  VERSION:'1.0.0'
}