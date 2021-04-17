const Message = require("./Message.js");

module.UserCreate = class extends Message {
    constructor(user) {
        super("usercreate");
        this.user = user;
    }

    toJSON() {
        const s = super.toJSON();
        s["user"] = this.user;
        return s;
    }
}