"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post_1.Post],
    dbName: 'lireddit',
    user: 'yashtrivedi',
    password: '1431',
    type: 'postgresql',
    debug: true,
};
//# sourceMappingURL=mikro-orm.config.js.map