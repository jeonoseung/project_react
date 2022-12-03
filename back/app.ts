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
/** mysql */
const mysql = require('mysql')
/** mysql 연결 */
const con = mysql.createConnection({
    host: '1.234.23.236',
    user: 'root',
    password: 'tnd01176***',
    database: 'LastProject',
    multipleStatements: true,
    timezone:"Asia/Seoul",
    dateStrings:true
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../front/build')))
app.get('*',function(req:Request, res:Response){
    res.sendFile(path.join(__dirname, '../front/build/index.html'))
})
app.get('/techstackex', async (req:Request,res:Response)=>{
    interface techstackex{
        id:number
        name:string
        content:string
    }
    interface ex extends Array<techstackex>{}
    con.query("SELECT * FROM TechStackEx",(err:ErrorRequestHandler,rows:ex)=>{
        console.log(rows)
    })
})
app.listen(port, () => {
    console.log(`연결 성공`);
});