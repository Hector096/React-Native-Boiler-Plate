export const Environment = false

export const Config = {
  API_URL: Environment ? process.env.API_URL : process.env.DEV_API_URL ,
  VERSION:'1.0.0'
}