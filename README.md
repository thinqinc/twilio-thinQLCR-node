# twilio-thinQLCR-node, Twilio Wrapper NodeJS Library For thinQ LCR integration

**This package is no longer maintainted. You should use the rest API instead**
--------------------------------------------------------------------------

##**Note that you will need a valid LCR Account with thinQ before using the libraries. For more information please contact your thinQ Sales representative at [http://www.thinq.com/library/](http://www.thinq.com/library/)**

#### *Copyright (c) 2016 thinQ*

## Installation

Add this line to your application's package.json file:

```javascript
    "dependencies": {
        "twilio-thinqlcr": "^1.0.0"
    }
```

Or install it yourself as:

    $ npm install twilio-thinqlcr

## Usage
```javascript
var TwilioWrapper = require('twilio-thinqlcr');

var twilio_accountSid = 'ACa5a21802beff96f147d40bf98c957038';
var twilio_authToken = '7852c807435af28d468344ca57a49d2a';
var thinQ_id = '11001';
var thinQ_token = '0c82a54f22f775a3ed8b97b2dea74036';
var from_number = '1234567890';
var to_number = '9876543210';
var twiml_resource_url = 'http://demo.twilio.com/docs/voice.xml';

var wrapper = new TwilioWrapper(
    twilio_accountSid,                    // twilio account sid  
    twilio_authToken,                     // twilio account token
    thinQ_id,                             // thinQ id
    thinQ_token                           // thinQ token
    );

var return_promise = wrapper.call(from_number, to_number, twiml_resource_url);

return_promise.then(function(call){
    console.log("Successfully initiated a new call to customer!");
    console.log("Call sid: " + call.sid);
    }, function(error){
    console.log(err);
});
```
