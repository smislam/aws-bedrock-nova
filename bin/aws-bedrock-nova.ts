#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsBedrockNovaStack } from '../lib/aws-bedrock-nova-stack';

const app = new cdk.App();
new AwsBedrockNovaStack(app, 'AwsBedrockNovaStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});