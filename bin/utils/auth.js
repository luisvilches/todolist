const jwt = require("jwt-simple");
const moment = require("moment");
const config = require("../../config/auth");

exports.createTokens = (user) => {
    let payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
        username: user.name,
    };

    return jwt.encode(payload,config.TOKEN_SECRET);
}