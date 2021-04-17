const Message = require("./Message.js");

module.exports = class extends Message {
    constructor(user, sessionid) {
        super("userjoin");
        this.user = user;
        this.sessionid = sessionid;
    }

    toJSON() {
        const s = super.toJSON();
        s["user"] = this.user;
        s["sessionid"] = this.sessionid;
        return s;
    }
}