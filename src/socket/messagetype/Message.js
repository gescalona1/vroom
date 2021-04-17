module.Message = class {
    constructor(type) {
        this.type = type;
    }

    toJSON() {
        return {type: this.type};
    }
}