import express, {Application , Request,Response} from 'express'
import "dotenv/config"
import path from 'path'
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import { sendMail } from './config/mail.js';

//view current dir path
const __dirname= path.dirname(fileURLToPath(import.meta.url))

const app: Application= express();
const PORT=process.env.PORT || 7000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//view engine
app.set("view engine","ejs");
app.set('views', path.resolve(__dirname, './views')); 

//server static file like css,js from the public folder
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',async (req:Request,res: Response)=>{
    const html = await  ejs.renderFile(__dirname+ `/views/emails/welcome.ejs`, {
        name: "abhay aswal"
    });

    await sendMail("fativ42717@fanlvr.com","testing smtp",html)
    return res.json({
        msg:"email send successfully"
    })
})



app.listen(PORT,()=>{
    console.log(`server is listening in ${PORT}`)   
})