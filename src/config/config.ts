export const config = {
    "dev": {
        "username": process.env.USERNAME || "a",
        "password": process.env.PASSWORD || "b",
        "database": process.env.DATABASE || "c",
        "host": process.env.HOST || "d",
        "dialect": "mysql",
        "aws_region": process.env.AWS_REGION || "f",
        "aws_profile": process.env.AWS_PROFILE || "g",
        "aws_media_bucket": process.env.AWS_MEDIA_BUCKET || "h"
      }
    
    // "prod": {
    //   "username": "",
    //   "password": "",
    //   "database": "",
    //   "host": "",
    //   "dialect": "postgres"
    // }
  }