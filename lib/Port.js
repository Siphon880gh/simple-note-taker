require('dotenv').config();
const process = require("process");

module.exports = class {
    constructor() {
        return {
            // port: 80 // testing Heroku compatibility
            port: this.isLocalHost() ? this.env() : this.default()
        }
    }
    isLocalHost() {
        return Boolean(process.env.PORT);
    }
    env() {
        return parseInt(process.env.PORT);
    }
    default () {
        return 80;
    }
}