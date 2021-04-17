const Message = require("./messagetype/Message.js");
const WebSocketServer = require("ws").Server;

module.exports = class {
    constructor(port) {
        this.wss = new WebSocketServer({port: port});
        this.listeners = new Map();

        this.wss.on("connection", ws => {
            console.info("websocket connection open");
        
            const userId = new Date().getTime();

            ws.on("message", (data, flags) => {
                data = JSON.parse(data);
                const messageType = data["type"];
                if (messageType == undefined) return; //cause an error
                const callback = this.listeners.get(messageType);
                callback(data);
            });
        
            ws.on("close", () => {
                console.log("websocket connection close");
            });
        });
    }

    send(message) {
        if (!(message instanceof Message)) return;
        this.ws.send(JSON.stringify(message.toJSON()));
    }

    recieve(messagetype, callback) {
        this.listeners.set(messagetype, callback);
    }

    close() {
        this.ws.close();
    }
}