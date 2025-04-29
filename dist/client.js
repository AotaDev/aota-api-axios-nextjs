"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const client = axios_1.default.create({
    headers: {
        "Content-Type": "application/json",
    },
});
// Você pode adicionar interceptors se quiser
client.interceptors.response.use((response) => response, (error) => {
    var _a;
    console.error("[API ERROR]", ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
    return Promise.reject(error);
});
exports.default = client;
