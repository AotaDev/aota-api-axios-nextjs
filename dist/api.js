"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
const BASE_LOCAL_URL = process.env.NEXT_PUBLIC_API_URL_NEXT || "";
const api = async ({ method, endpoint, body = {}, headers = {}, local = false, }) => {
    var _a, _b;
    try {
        const url = `${local ? BASE_LOCAL_URL : BASE_URL}${endpoint}`;
        const response = await client_1.default.request({
            method,
            url,
            headers,
            data: body,
        });
        return {
            status: response.status,
            data: response.data,
        };
    }
    catch (err) {
        const error = err;
        return {
            status: ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500,
            data: (((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || {}),
        };
    }
};
exports.default = api;
