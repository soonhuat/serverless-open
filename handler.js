'use strict';

var aws = require('aws-sdk');

module.exports.hello = async (event, context, callback) => {
  var lambda = new aws.Lambda({
    region: process.env.AWS_REGION || 'us-east-1',
    endpoint: process.env.AWS_LAMBDA_URI || 'http://localhost:3002'
});
  var opts = {
    FunctionName: 'serverless-open-dev-daisyChain',
    InvocationType: 'RequestResponse'
  }

  lambda.invoke(opts, function (err, data) {
    if (err) {
      console.log('daisy chain failed: ' + err)
      callback(err, null)
    } else if (data) {
      const response = {
        statusCode: 200,
        body: JSON.parse(data.Payload)
      }
      callback(null, response)
    }
  });
};


module.exports.daisyChain = (event, context, callback) => {
  callback(null, { message: 'dashing lamb chop' })
};


module.exports.eventBridgeEvent = async (event) => {
  console.log(JSON.stringify(event, null, 2))
};

module.exports.snsPublish = (event, context, callback) => {
  let sns = new aws.SNS()

  let opts = {
    Message: JSON.stringify(event.body),
    TopicArn: process.env.snsTopicArn,
  };

  sns.publish(opts, (err, data) => {
    if (err) {
      console.log('error while sending message over sns: ' + err)
      callback(err, null)
    } else {
      const response = {
        statusCode: 200,
        body: 'message sent successfully'
      }
      callback(null, response)
    }
  })
};

module.exports.snsConsume = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: event.Records[0].Sns.Message
  }
  callback(null, response)
};