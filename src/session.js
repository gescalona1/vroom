module.exports = class {
    constructor(owner) {
        this.owner = owner;
        this.sessionid = null;
        this.enforceTalk = true;
        this.enforceVideo = true;
    }
}