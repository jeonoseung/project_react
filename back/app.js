"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
/** 암호화 */
const bcrypt = require('bcrypt');
/** 세션 */
const session = require("express-session");
/** 폼데이터 처리 */
const multer = require('multer');
/** 파일 관리 */
const fs = require('fs');
/** 포트 번호 */
const port = 10327;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../front/build')));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../front/build/index.html'));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
