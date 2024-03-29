
import { AWSConfig } from './types';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: AWSConfig = {
  region: process.env.AWS_REGION_NAME || '',
  bucket: process.env.AWS_BUCKET_NAME || '',
  bucketFolder: process.env.AWS_BUCKET_FOLDER || '',
};

export default {
  config,
};