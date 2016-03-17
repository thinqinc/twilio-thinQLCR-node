var twilio = require('twilio');

var THINQ_DOMAIN = "wap.thinq.com";
var TWIML_RESOURCE_URL = "http://demo.twilio.com/docs/voice.xml";

var TwilioWrapper = function(twilio_account_sid, twilio_account_token, thinQ_id, thinQ_token){
	this.twilio_account_sid = twilio_account_sid;
	this.twilio_account_token = twilio_account_token;
	this.thinQ_id = thinQ_id;
  	this.thinQ_token = thinQ_token;
	this.client = new twilio.RestClient(twilio_account_sid, twilio_account_token);
};

TwilioWrapper.prototype.isClientValid = function(){
	return this.client != null && Object.keys(this.client).length > 0;
};

TwilioWrapper.prototype.call = function(from, to){
	if(!this.isClientValid()) {
        return null;
    }

    return this.client.makeCall({
	    url: TWIML_RESOURCE_URL,
	    to: "sip:" + to + "@" + THINQ_DOMAIN + "?thinQid=" + this.thinQ_id + "&thinQtoken=" + this.thinQ_token,
	    from: from
	});
};

module.exports = TwilioWrapper;