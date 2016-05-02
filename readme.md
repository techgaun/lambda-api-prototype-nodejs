# lambda-api-prototype-nodejs

> A simple prototype in nodejs that works with lambda and api gateway

### Installation

Since the lambda supports nodejs 0.10.36, make sure you use this version for your local development.

Clone this repo and perform the module installation:

```shell
$ npm i
$ npm i -g node-lambda # you can use it for local development
```

### Configuration

You can modify [development-sample.json](config/development-sample.json) as per your liking. Please note that the AWS keys and secrets are not available in the config. They are not supposed to be used there. So, either use AWS shared credentials or pass environment variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

### What it does

It does not do whole lot of things or anything cool but is just something that can read data via POST and write the data to dynamodb table. It can be a good starting point for learning lambda and api gateway. That's how I learnt how to work with api gateway and lambda.
