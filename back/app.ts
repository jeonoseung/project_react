import express, { Express, Request, Response,ErrorRequestHandler,NextFunction } from 'express';
import path from "path";
const cookieParser = require('cookie-parser');
const app: Express = express();
/** 암호화 */
const bcrypt = require('bcrypt');
/** 세션 */
const session = require("express-session");
/** 폼데이터 처리 */
const multer  = require('multer')
/** 파일 관리 */
const fs = require('fs');
/** 포트 번호 */
const port:number = 10327;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../front/build')))
app.get('*',function(req:Request, res:Response){
    res.sendFile(path.join(__dirname, '../front/build/index.html'))
})

app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});