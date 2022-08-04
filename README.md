# Baby step learning serverless with native js

## Description

* chaining lambda function :chains: daisy chain
* eventBridge :curly_loop: serverless event bus from cloudTrail event
* lite event sourcing (PubSub) :love_letter: with simple notification service instead of kinesis

** serverless-pseudo-parameters is not needed because using serverless framework version >= 2.50

## Installation

```bash
$ npm install
```

## Development

To simulate the app running on Lambda locally, run the following:

```bash
$ serverless offline
```

The application will be available at `http://localhost:3000/dev/hello`.
* this endpoint to chain lambda invocation to `http://localhost:3000/dev/daisyChain`

## Deployment the app

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```bash
$ serverless deploy
```
